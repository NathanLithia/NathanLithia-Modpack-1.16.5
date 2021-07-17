import sys
import time
from os import system, name, mkdir, getcwd
import urllib.request
import zipfile


class Minecraft:
    def __init__(self):
        self = Minecraft
        #Name variables passed on from the game
        self.Username = sys.argv[1]
        self.UUID = sys.argv[2]
        self.MinecraftVersion = sys.argv[3]
        self.ForgeVersion = sys.argv[4]
        self.ModCount = sys.argv[5]
        #lets try our best to find where we are
        self.ConfigDir = str(getcwd()).rstrip("\\nathanlithia")
        self.MinecraftDir = self.ConfigDir.rstrip("\\config")
        self.ShadersDir = self.MinecraftDir+"\\shaderpacks"
        self.AssetsDir = self.MinecraftDir+"\\kubejs\\assets"


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
        print(f"Downloading: {save_path} from {url}")
        with urllib.request.urlopen(url) as dl_file:
            with open(save_path, 'wb') as out_file:
                out_file.write(dl_file.read())

    def unzipfile(filezip, path):
        print(f"Unzipping {filezip} to {path}.")
        with zipfile.ZipFile(filezip, 'r') as unzip:
            unzip.extractall(path)


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

    def sandbox():
        """Development command for sandboxing code"""
        print("\nThis is a development function, which is really dangerous!")
        print("Type 'break' to exit the loop!\n")
        while True:
            code = input(f"Evaluate: ")
            if code == "break": break
            if code != None:
                try:
                    print(eval(code))
                except Exception as e: print(str(e))

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
        Functions.unzipfile("NLShader.zip", Minecraft.ShadersDir)

Console()