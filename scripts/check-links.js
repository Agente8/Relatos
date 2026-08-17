const fs = require('fs');
const path = require('path');
const files = ['index.html', 'aula.html', ...fs.readdirSync('relatos').filter(f => f.endsWith('.html')).map(f => `relatos/${f}`)];
let ok = true;
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]).filter(ref => !ref.startsWith('http') && !ref.startsWith('#') && !ref.startsWith('mailto:') && ref !== '');
  for (const ref of refs) {
    const clean = ref.split('#')[0];
    if (!clean) continue;
    const target = path.normalize(path.join(path.dirname(file), clean));
    if (!fs.existsSync(target)) {
      console.error(`${file}: missing ${ref}`);
      ok = false;
    }
  }
}
if (!ok) process.exit(1);
console.log(`Checked ${files.length} HTML files.`);
