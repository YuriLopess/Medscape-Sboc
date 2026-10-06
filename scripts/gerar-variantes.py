"""
Gera versões menores das fotos de public/images (480, 720, 960 e 1280 px de largura) e a lista em
src/data/image-variants.json, que o componente Media usa para montar o srcset.

O navegador passa a baixar a versão do tamanho em que a foto aparece (um card de 290 px não
precisa de uma foto de 1600 px). Rode de novo sempre que adicionar ou trocar uma foto:

    python scripts/gerar-variantes.py

Precisa do Pillow (pip install pillow). Fotos sem versões continuam funcionando: o site só usa
as versões menores das imagens que estão na lista.
"""
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
IMAGES = PUBLIC / 'images'
MANIFEST = ROOT / 'src' / 'data' / 'image-variants.json'
WIDTHS = (480, 720, 960, 1280)
QUALITY = 85  # abaixo disso o JPEG começa a mostrar perda nas fotos grandes
SKIP_DIRS = {'logos'}  # logos são pequenas e aparecem em tamanho fixo


def is_variant(path: Path) -> bool:
    return any(path.stem.endswith(f'-{w}') for w in WIDTHS)


manifest = {}
for src in sorted(IMAGES.rglob('*.jpg')):
    if is_variant(src) or SKIP_DIRS & set(src.relative_to(IMAGES).parts):
        continue
    with Image.open(src) as im:
        im = im.convert('RGB')
        widths = []
        for w in WIDTHS:
            if im.width <= w:
                continue
            out = src.with_name(f'{src.stem}-{w}{src.suffix}')
            h = round(im.height * w / im.width)
            im.resize((w, h), Image.LANCZOS).save(out, quality=QUALITY, optimize=True, progressive=True)
            widths.append(w)
        widths.append(im.width)  # o original entra como a maior opção
    key = src.relative_to(PUBLIC).as_posix()
    manifest[key] = widths
    print(f'{key}: {widths}')

MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'\n{len(manifest)} imagens na lista: {MANIFEST.relative_to(ROOT)}')
