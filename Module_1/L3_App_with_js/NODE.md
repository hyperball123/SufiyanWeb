## NODE JS
  -- usecase is to build server
  -- For building server js will give logic
  -- actual implmentation node js features will be used

## node js is famous for different reasons but few points are 
## modules - node js has its own modules inbuilt. such as...    
    -- fs.files
    -- os - for communication with operating system
    -- path - for url 
    and there are many more these are some famous ones/

    *and it has its own playstore as npm

// come in handy for folders and files
let fs = require("fs");
## FILE --  // file --> read,write,create,delete, append,copy;
    1.create -> fs.writeFileSync("newFile.txt","");
    2.read -> fs.readFileSync("readme.txt","utf-8");
    3.append -> fs.appendFileSync("newFile.txt","....i have added some content later..");
    4.delete -> fs.unlinkSync("readme.txt");
    5.override content -> fs.writeFileSync("newFile.txt","");
    6.copy File -> content copy
           fs.copyFileSync(sourcePath,destinationPath);

## Folder -- directory
    1.create -> fs.mkdirSync("newFolder");
    2.delete -> fs.rmdirSync("remove");
    3.read -> fs.readdirSync();

## Extra Functions
    1.fs.lstatSync(RandomPath).isFile();
      fs.lstatSync(RandomPath).isDirectory();
    2.

## path 
  1.__dirname;
  2.__filename;
  3.process.cwd();

  4.path.join();
  5.path.extname();
  6.path.basename();