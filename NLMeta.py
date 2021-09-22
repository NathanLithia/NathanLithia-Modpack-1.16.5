import os
import io
import hashlib

mods = os.listdir("mods")
md5 = hashlib.md5()
BLOCK_SIZE = 65536

for mod in mods:
    if mod.endswith((".NLMeta")):
        print(f"Updated: {mod}")
        os.remove("mods/"+mod)
for mod in mods:
    if mod.endswith((".jar")):
        print(f"Wrote: {mod}")

        with open("mods/"+mod, 'rb') as f:
            filebytes = f.read(BLOCK_SIZE)
            while len(filebytes) > 0:
                md5.update(filebytes)
                filebytes = f.read(BLOCK_SIZE)

        f = open(f"mods/{mod}.NLMeta", "a")
        f.write(f"{mod}\n{md5.hexdigest()}")
        f.close()

