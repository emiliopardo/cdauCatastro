import CdauCatastro from 'facade/cdaucatastro';

const map = M.map({
  container: 'mapjs',
});

const mp = new CdauCatastro();

map.addPlugin(mp);
