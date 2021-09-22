import os
import io
import hashlib

mods = os.listdir("mods")
md5 = hashlib.md5()
BLOCK_SIZE = 65536

for mod in mods:
    if mod.endswith((".NLMeta")):
        os.remove("mods/"+mod)
for mod in mods:
    if mod.endswith((".jar")):
        modhash = hashlib.md5(open(f'mods/'+mod,'rb').read()).hexdigest()
        f = open(f"mods/{mod}.NLMeta", "a")
        f.write(f"{mod}\n{modhash}")
        f.close()
        print(f"{modhash} {mod}")

