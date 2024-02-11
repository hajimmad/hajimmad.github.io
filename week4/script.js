var names=new Array();
names[0]="mohammaad";
names[1]="ahmad";
names[2]="ali";
names[3]="farid";
names[4]="hamed";
names[5]="akbar";
names[6]="noor";
names[7]="jawad";
names[8]="farman";
names[9]="mohammad ali";


for (var i = 0; i < names.length; i++) {
    if(names[i].chartAt(0)=== 'J'|| names[i].chartAt(0)==='j'){
       console.log("Goodbye "+ names[i])
    } else{console.log("Hello "+ names[i])
    }
}