const { leerInput, inquirerMenu, pausa } =  require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() =>{
    
    const Busquedas = new Busquedas();
    let opt;


    
    do{
        opt = await inquirerMenu();
       switch(opt){

        case 1: 

        const lugar = await leerInput('Ciudad: ');
        console.log(lugar);





        console.log('\nInformacion de la ciudad\n'.green);
        console.log('Ciudad:', );
        console.log('Lat:', );
        console.log('Lng:', );
        console.log('Temperatura:', );
        console.log('Minima:', );
        console.log('Max:', );





       }
        await pausa();

        if(opt !== 3) await pausa();
    } while(opt !== 3)
}

main();