import sys
import time
from os import system, name, mkdir
import urllib.request


class Minecraft:
    def __init__(self):
        self = Minecraft
        self.Username = sys.argv[1]
        self.UUID = sys.argv[2]
        self.MinecraftVersion = sys.argv[3]
        self.ForgeVersion = sys.argv[4]
        self.ModCount = sys.argv[5]

class Console:
    def __init__(self):
        self = Console
        Minecraft()
        print("!!! IF SOMEONE TOLD YOU TO TYPE SOMETHING IN HERE ITS PROBABLY DANGEROUS !!!")
        print("!!! TO VIEW SAFE FUNCTIONS TYPE COMMANDS !!!")
        while True:
            request = input(f"{sys.argv[1]}: ")
            try:
                output = eval("Commands."+request+"()")
                if output != None:
                    print(output)
            except Exception as e: print(str(e))

class Functions:
    def __init__(self):
        self = Functions


    def download(url, save_path):
        with urllib.request.urlopen(url) as dl_file:
            with open(save_path, 'wb') as out_file:
                out_file.write(dl_file.read())

class Commands:
    def __init__(self):
        self = Commands


    def stats():
        """Prints minecraft stats"""
        print(f"Username: {Minecraft.Username} / UUID: {Minecraft.UUID}")
        print(f"Minecraft Version: {Minecraft.MinecraftVersion}")
        print(f"Forge: {Minecraft.ForgeVersion} with {Minecraft.ModCount} mods loaded")


    def commands():
        """Prints program functions"""
        print([ m for m in dir(Commands) if not m.startswith('__')])


    def clear():
        """Clear console for Windows & Linux/Mac"""
        if name == 'nt':
            system('cls')
        else:
            system('clear')


    def update():
        """Updates the shader and resources"""
        Functions.download('https://github.com/NathanLithia/NLShader/archive/refs/heads/main.zip', 'NLShader.zip')
        Functions.download('https://github.com/NathanLithia/NLResourcePack/archive/refs/heads/main.zip', 'NLResourcePack.zip')
        pass

Console()