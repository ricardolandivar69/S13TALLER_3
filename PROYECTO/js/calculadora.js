class CalculadoraCientifica{
  limpiar(){
    let resul = document.getElementById("resultado")
    resul.value=""
  }
  contpalabras(){
    let result= document.getElementById("resultado")
    let c=1,i=0
    let tex=result.value
    for(let i=0;i<tex.length-1; i++){
        if(tex[i]==" " && tex[i+1]!==" "){
            c=c+1
      }
    }
    result.value="La frase ->"+tex+". ( tiene "+c+" palabras) "
  }
  nprimo(){
      let resul = document.getElementById("resultado")
      let num1
      let resto=0
      let c=0
      num1 = parseInt(resul.value)
      for (let  i=1;i<=num1;i++){ 
        resto=num1%i
        if(resto==0){
          c=c+1
        }
      }
      if(c==2){
        resul.value=`${num1.toString()} ES UN NUMERO PRIMO`
      }else{
        resul.value=`${num1.toString()} NO ES UN NUMERO PRIMO`
      }
  }
  base10a16(){
    let resul = document.getElementById("resultado")//contenido
    let residuo,numeros=[],c=0,base10="",resp=""
    let num1 = parseInt(resul.value)
    if(num1>=0){//validar que los caracteres sean numericos 
      while (num1 > 0){
        residuo= num1%16 //saca la parte residual - resto
        num1=Math.floor(num1/16) //saca el cociente trunc ASIGNA NUEVO NUMERO
        numeros[c]=residuo//{6,10,2} - 5-8-7
        c=c+1
      }
      c=c-1
      for(let pos=0;pos<=c;pos++){
        base10=numeros[pos]
        switch (base10%16){
        case 10:
          resp="A"+resp
          break
        case 11:
          resp="B"+resp
          break
        case 12:
          resp="C"+resp
          break
        case 13:
          resp="D"+resp
          break
        case 14:
          resp="E"+resp
            break
        case 15:
          resp="F"+resp
              break
        default:
          resp=base10+resp//presenta en el html
      }
        resul.value=resp
      }
    }else{
      resul.value="Ingrese valores numericos en base 10"
    }
    }
  proarreglo(){
    let resul=document.getElementById("resultado")//8;20;10
    let datos=resul.value //["8","20","10"]
    let arr=datos.split(";")
    let sum=0,prom=0
    for(let i=0;i<arr.length;i++){
        sum+=parseFloat(arr[i])
    }
    prom=sum/arr.length
      resul.value=`LA SUMA DEL ARREGLO [${arr.toString()}] ES ${sum} EL PROMEDIO ES ${prom.toFixed(2)}`
  } 
}

let Calculadora=new CalculadoraCientifica();
