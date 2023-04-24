Search.setIndex({"docnames": ["hyak/compute/apptainer/apptainer", "hyak/compute/compute", "hyak/compute/lmod", "hyak/compute/slurm/slurm", "hyak/software/afni", "hyak/software/freesurfer", "hyak/software/matlab", "hyak/software/software", "hyak/software/spm_conn", "hyak/start/connect-ssh", "hyak/start/hyakvnc", "hyak/start/introduction", "hyak/start/start", "intro"], "filenames": ["hyak/compute/apptainer/apptainer.md", "hyak/compute/compute.md", "hyak/compute/lmod.md", "hyak/compute/slurm/slurm.md", "hyak/software/afni.md", "hyak/software/freesurfer.md", "hyak/software/matlab.md", "hyak/software/software.md", "hyak/software/spm_conn.md", "hyak/start/connect-ssh.md", "hyak/start/hyakvnc.md", "hyak/start/introduction.md", "hyak/start/start.md", "intro.md"], "titles": ["Apptainer", "Compute", "Lmod", "Slurm Basics", "AFNI", "FreeSurfer", "MATLAB", "Software", "SPM and CONN Toolboxes", "SSH", "hyakvnc", "Introduction to UW Hyak", "Getting Started", "Welcome"], "terms": {"formerli": 0, "singular": [0, 10], "simpl": 0, "contain": [0, 5, 10, 12], "platform": [0, 9, 10], "enabl": [0, 6, 9, 10], "user": [0, 3, 9, 10], "instal": 0, "run": [0, 3, 4, 5, 8, 9, 10, 12], "softwar": [0, 2, 8, 12, 13], "would": 0, "otherwis": 0, "unsupport": [0, 9], "host": [0, 9, 10], "environ": [0, 4, 5, 8, 10], "modul": [0, 4, 5, 6, 7, 8, 12], "In": [0, 10], "gener": [0, 9], "do": [0, 9], "default": [0, 2, 3, 5, 6, 8, 9, 10], "within": [0, 7, 10], "load": [0, 4, 5, 8, 10], "specifi": [0, 2, 9, 10], "instead": [0, 10], "specif": [0, 5, 6, 8, 10], "set": [0, 4, 9, 10], "requir": [0, 4, 5, 9, 10], "bind": 0, "path": [0, 4, 5, 9, 10], "These": 0, "allow": 0, "you": [0, 3, 10], "local": [0, 4, 5, 8, 9, 10], "storag": [0, 9, 12], "we": [0, 5, 9, 10], "recommend": [0, 5, 10], "follow": [0, 3, 4, 5, 8, 9, 10], "befor": 0, "export": [0, 3, 4, 5, 8], "apptainer_bindpath": 0, "tmp": 0, "home": [0, 9], "mmfs1": 0, "sw": [0, 4, 5, 8, 10], "scr": 0, "gscratch": [0, 5, 9], "opt": 0, "hyak_root": 0, "To": [0, 6, 9, 10], "start": [0, 8, 9, 10, 13], "shell": [0, 3, 4, 9, 10], "path_to_contain": 0, "image_nam": 0, "http": [0, 4, 5, 8, 10, 11], "org": [0, 8], "doc": 0, "main": 0, "definition_fil": 0, "html": [0, 5], "todo": [0, 2, 4, 5, 6, 9, 11], "python": 0, "call": 0, "my_script": 0, "py": 0, "exec": [0, 10], "sif": [0, 10], "python3": [0, 10], "apptainer_cachedir": 0, "variabl": 0, "differ": 0, "uw": [1, 3, 5, 9, 10, 12], "hyak": [1, 3, 10, 12], "cluster": [1, 3, 9, 11, 12], "us": [1, 3, 9], "slurm": [1, 10, 12, 13], "manag": [1, 3, 9, 10], "access": [1, 4, 9, 10, 12], "resourc": [1, 10, 12], "schedul": [1, 3], "job": [1, 10, 12], "basic": [1, 13], "apptain": [1, 4, 5, 8, 12, 13], "lmod": [1, 4, 5, 8, 12, 13], "version": [2, 10], "If": [2, 4, 5, 8, 9, 10], "mark": 2, "d": [2, 8, 10], "can": [3, 5, 9, 10, 12], "script": [3, 10], "parallel": 3, "task": 3, "manual": 3, "gui": [3, 6, 9, 10], "program": [3, 10, 12], "group": [3, 10], "command": [3, 8, 9, 10], "see": 3, "which": 3, "ar": [3, 4, 8, 9, 10], "member": 3, "hyakalloc": 3, "avail": [3, 9], "A": [3, 10], "lab": [3, 7, 10, 12], "p": [3, 4, 5, 8, 9, 10], "node_typ": [3, 10], "n": [3, 10], "num_nod": 3, "c": [3, 5, 9, 10], "num_cpu": 3, "mem": [3, 10], "unit": 3, "time": [3, 4, 5, 8, 10], "dd": 3, "hh": 3, "mm": 3, "ss": 3, "add": [3, 9, 10, 11], "flag": [3, 4, 5, 8], "plan": 3, "enter": [3, 9], "exit": [3, 10], "node": [3, 9, 10, 12], "without": [3, 9, 10], "lose": 3, "alloc": 3, "scancel": 3, "job_id": [3, 10], "termin": [3, 6, 9, 10], "squeue": 3, "me": 3, "inform": 3, "about": 3, "activ": [3, 9, 12], "pend": 3, "includ": [3, 7, 9, 10], "id": [3, 10], "from": [3, 6, 10], "login": [3, 9, 10, 12], "pty": 3, "bin": [3, 4, 5], "bash": [3, 5], "mybatch": 3, "sbatch": 3, "name": [3, 4, 5, 8, 9, 10], "option": [3, 10], "mail": 3, "type": [3, 9], "statu": [3, 10], "email": [3, 5], "account": 3, "partit": 3, "ntask": 3, "per": 3, "cores_per_nod": 3, "size": [3, 10], "gpu": [3, 10], "quantiti": 3, "max": 3, "runtim": 3, "format": 3, "chdir": 3, "work": [3, 10], "directori": [3, 9, 10], "current": [3, 4, 5], "all": [3, 4, 9, 10], "output": 3, "file": [3, 4, 5, 8, 10], "where": 3, "stdout": 3, "goe": 3, "error": [3, 10], "stderr": 3, "your": [3, 9, 10], "here": [3, 9, 10], "my_program": 3, "onli": 4, "vnc": [4, 5, 6, 8], "suffici": [4, 5, 8], "depend": [4, 5, 8, 10], "after": [4, 5, 8], "tool": [4, 9, 10], "made": 4, "session": [4, 5, 6, 9], "thi": [4, 5, 7, 8, 9, 10], "provid": [4, 5, 8, 9], "refer": [4, 5, 8], "materi": [4, 5, 8], "ran": [4, 10], "step": [4, 5, 7, 10], "prepar": [4, 5, 7], "download": [4, 5, 8], "curl": 4, "o": 4, "nimh": 4, "nih": 4, "gov": 4, "pub": 4, "dist": 4, "misc": 4, "updat": 4, "binari": 4, "cento": [4, 5, 9], "7": [4, 5], "packag": [4, 9], "contrib": [4, 5, 8], "labnam": [4, 5, 8], "src": [4, 5, 8], "escienc": 4, "target": [4, 8, 9], "tcsh": 4, "linux_centos_7_64": 4, "do_extra": 4, "bindir": 4, "r": [4, 9], "librari": [4, 5, 10], "rlib": 4, "r_lib": 4, "mkdir": [4, 5, 8], "rpkgsinstal": 4, "pkg": 4, "creat": [4, 5, 8, 9, 12], "an": [4, 5, 8, 10], "lua": [4, 5, 8], "text": [4, 5, 8, 9], "editor": [4, 5, 8, 9], "modulefil": [4, 5, 8], "help": [4, 5, 8, 10], "base": [4, 5, 8], "pathjoin": [4, 5, 8], "append_path": [4, 8], "setenv": [4, 5], "mode": 4, "lmodmessag": 4, "On": [4, 10], "initi": [4, 10], "suma": 4, "update_env": 4, "end": 4, "whati": [4, 5, 8], "take": [4, 5, 8], "some": [4, 5, 8, 9], "cach": [4, 5, 8], "doe": [4, 5, 8, 9], "appear": [4, 5, 8, 9], "i": [4, 5, 8], "ignore_cach": [4, 5, 8], "forc": [4, 5, 8], "new": [4, 5, 7, 8, 9, 10], "must": [5, 10], "rockylinux8": [5, 10], "psych": [5, 10], "hyak_vnc_apptain": [5, 10], "open": [5, 9, 10], "sourc": [5, 10], "neuroimag": 5, "toolkit": 5, "klone": [5, 8, 9, 10, 11, 12], "should": [5, 9, 10, 12], "have": [5, 9, 10], "its": [5, 10, 12], "setup": [5, 9, 10], "normal": [5, 10], "test": [5, 8], "go": 5, "surfer": 5, "nmr": 5, "mgh": 5, "harvard": 5, "edu": [5, 9, 10, 11, 12], "fswiki": 5, "downloadandinstal": 5, "latest": 5, "tar": 5, "archiv": [5, 8], "8": [5, 10], "extract": [5, 8], "gz": 5, "For": [5, 8, 10], "exampl": [5, 8, 9, 10], "3": 5, "2": [5, 10], "xzf": 5, "linux": [5, 9, 10], "centos8_x86_64": 5, "strip": 5, "compon": 5, "1": [5, 10], "releas": [5, 8], "x": 5, "matlab": [5, 7, 8, 13], "r2014b": 5, "depend_on": 5, "forsyth": 5, "freesurfer_hom": 5, "prepend_path": 5, "source_sh": 5, "setupfreesurf": 5, "sh": 5, "request": [5, 12], "free": [5, 10], "licens": 5, "registr": 5, "alreadi": [5, 9], "ti": 5, "copi": [5, 9], "previou": 5, "txt": 5, "fs": 5, "fast": 5, "support": [5, 9, 10], "link": 5, "cd": [5, 10], "ln": 5, "s": [5, 9, 10, 11, 12], "mcrv84": 5, "x11": [6, 9], "forward": [6, 9, 10], "cli": [6, 9, 10], "nodisplai": 6, "section": 7, "cover": 7, "maintain": [7, 9, 10], "psycholog": 7, "depart": 7, "freesurf": [7, 13], "spm": [7, 13], "conn": [7, 13], "toolbox": [7, 13], "afni": [7, 13], "statist": 8, "parametr": 8, "map": [8, 10], "window": [8, 10, 11], "www": 8, "fil": 8, "ion": 8, "ucl": 8, "ac": 8, "uk": 8, "zip": 8, "12": 8, "unzip": 8, "spm12": 8, "depends_on": 8, "matlabpath": 8, "nitrc": 8, "fr": 8, "group_id": 8, "279": 8, "v": [8, 10], "22": 8, "conn22a": 8, "mv": 8, "secur": 9, "primari": 9, "method": 9, "interact": [9, 10], "line": 9, "interfac": [9, 10], "authent": 9, "netid": [9, 10], "credenti": 9, "duo": 9, "two": 9, "factor": 9, "altern": 9, "kei": [9, 10], "cannot": [9, 10], "multiplex": 9, "share": [9, 10], "reus": 9, "maco": [9, 10], "most": 9, "distribut": 9, "newer": 9, "build": [9, 12], "10": [9, 10], "11": 9, "openssh": [9, 10], "pick": 9, "ubuntu": 9, "debian": 9, "mint": 9, "sudo": 9, "apt": 9, "get": [9, 10, 13], "rhel": 9, "fedora": 9, "rocki": 9, "dnf": 9, "suse": 9, "zypper": 9, "alpin": 9, "apk": 9, "arch": 9, "pacman": 9, "entri": 9, "comput": [9, 10, 11, 12, 13], "config": 9, "hostnam": [9, 10], "h": [9, 10], "controlpath": 9, "controlmast": 9, "auto": 9, "controlpersist": 9, "3600": 9, "nativ": 9, "applic": 9, "There": 9, "mani": [9, 10], "short": 9, "tabl": 9, "compar": 9, "each": 9, "port": [9, 10], "win32": 9, "server": [9, 10], "mobaxterm": 9, "putti": [9, 10], "msys2": 9, "wsl2": 9, "plink": 9, "ex": [9, 10], "suit": 9, "handl": 9, "input": 9, "arrow": 9, "cursor": 9, "movement": 9, "backspac": 9, "charact": 9, "delet": 9, "check": [9, 11], "possibl": 9, "configur": 9, "under": [9, 11], "save": 9, "profil": 9, "uwnetid": [9, 10, 12], "while": 9, "long": 9, "remain": 9, "close": 9, "right": [9, 10], "click": [9, 10], "titl": [9, 10], "bar": [9, 10], "duplic": 9, "place": 9, "instanc": 9, "powershel": 9, "consol": 9, "microsoft": 9, "store": 9, "app": 9, "prompt": [9, 10], "continu": 9, "ye": 9, "press": 9, "password": [9, 10], "success": [9, 10], "bottom": [9, 10], "icon": 9, "top": 9, "left": [9, 10], "corner": 9, "select": [9, 10], "remot": [9, 10], "usernam": 9, "ok": 9, "accept": [9, 10], "trust": 9, "ident": 9, "mox": [9, 11, 12], "separ": 9, "network": 9, "attach": 9, "one": 9, "other": 9, "scp": 9, "util": 9, "The": 9, "syntax": 9, "ha": 9, "form": 9, "source_path": 9, "destination_path": 9, "my": 9, "mylab": 9, "pscp": 9, "standard": 9, "tild": 9, "shortcut": 9, "By": 9, "rel": 9, "alwai": 9, "anywai": 9, "re": 9, "author": 9, "send": 9, "argument": [9, 10], "recurs": 9, "winscp": 9, "cyberduck": 9, "pip": 10, "spawn": 10, "need": 10, "ssh": [10, 12, 13], "client": 10, "capabl": 10, "viewer": 10, "graphic": 10, "tigervnc": 10, "sourceforg": 10, "net": 10, "project": 10, "stabl": 10, "13": 10, "dmg": 10, "x86_64": 10, "vncviewer64": 10, "clipboard": 10, "dynam": 10, "adjust": 10, "resolut": 10, "upon": 10, "chang": 10, "desktop": [10, 12], "At": 10, "bare": 10, "minimum": 10, "vncserver": 10, "vncpasswd": 10, "xfce4": 10, "more": 10, "function": 10, "addit": 10, "were": 10, "own": 10, "individu": 10, "entir": 10, "feel": 10, "make": 10, "recip": 10, "4": 10, "hour": 10, "login01": 10, "salloc": 10, "8g": 10, "00": 10, "clone": 10, "repositori": 10, "around": 10, "4gb": 10, "space": 10, "some_place_with_spac": 10, "git": 10, "github": 10, "com": 10, "5": 10, "cont_nam": 10, "xstartup": 10, "pwd": 10, "xfce4_config": 10, "upgrad": 10, "6": 10, "m": 10, "onc": 10, "print": 10, "usag": 10, "j": 10, "job_nam": 10, "kill": 10, "passwd": 10, "repair": 10, "posit": 10, "detail": 10, "given": 10, "cancel": 10, "miss": 10, "broken": 10, "loginnod": 10, "subnod": 10, "show": 10, "messag": 10, "debug": 10, "log": 10, "reserv": 10, "indefinit": 10, "when": 10, "expir": 10, "fail": 10, "timesout": 10, "reduc": 10, "too": 10, "As": 10, "our": 10, "amount": 10, "cpu": 10, "0": 10, "32g": 10, "want": 10, "reset": 10, "wa": 10, "connect": 10, "f": 10, "l": 10, "590a": 10, "127": 10, "590b": 10, "localhost": 10, "destin": 10, "instruct": 10, "exist": 10, "b": 10, "navig": [10, 12], "tunnel": 10, "appli": 10, "break": 10, "greet": 10, "same": 10, "dai": 10, "minut": 10, "second": 10, "aaaaaaaa": 10, "n3301": 10, "06": 10, "16": 10, "true": 10, "displai": 10, "number": 10, "5902": 10, "5900": 10, "bbbbbbbb": 10, "01": 10, "24": 10, "25": 10, "5901": 10, "5911": 10, "cccccccc": 10, "g3071": 10, "15": 10, "07": 10, "56": 10, "find": 10, "also": 10, "bound": 10, "throw": 10, "suppli": 10, "unless": 10, "Then": 10, "nest": 10, "introduc": 11, "servic": 11, "out": 11, "research": 11, "club": [11, 12], "slack": 11, "ask": 11, "question": 11, "student": 12, "join": 12, "reserach": 12, "rcc": 12, "gain": 12, "stf": 12, "fund": 12, "pi": 12, "purchas": 12, "dedic": 12, "via": 12, "understand": 12, "infrastructur": 12, "certain": 12, "virtual": 12, "hyakvnc": [12, 13], "introduct": [12, 13]}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"apptain": [0, 2, 10], "check": [0, 2, 3, 4, 5, 6, 8, 10], "avail": [0, 2, 4, 5, 6, 8], "version": [0, 4, 5, 6, 8], "us": [0, 4, 5, 8, 10], "interact": [0, 2, 3], "session": [0, 10], "pull": 0, "an": [0, 3, 9], "imag": 0, "from": [0, 2, 4, 5, 8, 9], "docker": 0, "io": 0, "registri": 0, "write": 0, "build": [0, 10], "recip": 0, "script": 0, "clear": 0, "cach": 0, "chang": 0, "refer": [0, 2, 10], "comput": [1, 2, 3], "overview": [1, 7, 12], "lmod": [2, 10], "all": 2, "modul": [2, 10], "load": [2, 6], "job": [2, 3], "slurm": 3, "basic": 3, "access": 3, "resourc": [3, 11], "submit": 3, "salloc": 3, "srun": 3, "batch": 3, "afni": 4, "forsyth": 4, "instal": [4, 5, 6, 8, 9, 10], "freesurf": 5, "escienc": [5, 8], "differ": [5, 6, 8], "matlab": 6, "run": 6, "softwar": 7, "spm": 8, "conn": 8, "toolbox": 8, "ssh": 9, "client": 9, "featur": 9, "comparison": 9, "window": 9, "connect": 9, "via": 9, "transfer": 9, "file": 9, "hyak": [9, 11, 13], "hyakvnc": 10, "prerequisit": 10, "vnc": 10, "creat": 10, "activ": 10, "close": 10, "nv": 10, "flag": 10, "cuda": 10, "introduct": 11, "uw": [11, 13], "get": 12, "start": 12, "welcom": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})