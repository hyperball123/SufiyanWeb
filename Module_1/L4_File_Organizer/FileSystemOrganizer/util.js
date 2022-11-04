let types = {
    media :["mp3","mkv","mp4"],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docs','doc','pdf','xlsx','xls','odt','ods','odg','odg','odf','txt'],
    app:['exe','dmg','pkg','deb']
}
let path =require("path");
function returnFolderName(fileName){
   let extname = path.extname(fileName);
   extname = extname.slice(1);

        for(let key in types){
                let totalExtension = types[key];
                for(let i = 0 ; i < totalExtension.length ; i++){
                    if(totalExtension[i]==extname){
                        console.log(key);
                        return;
                    }
                }  
        }
   console.log("others");
}

returnFolderName("resume.mp3");
returnFolderName("xyz.docs");