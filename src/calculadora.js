import React from "react";
import './calculadora.css';

 export default function Calculadora(){
    let num = 0;
    let valorAnterior = 0;
     let tipoOperacao = ' ';
    function setNum(valor){
        let resultado = document.querySelector("#localResultado");
        num = valor;
        resultado.textContent = num;
    }
    function limpar(){
        setNum(0);
    }
    function adicionar(e){
        let valor = e.target.value;
        if(num === 0){
            setNum(valor)

        }
        else{
            setNum(num + valor);
        }
    }
    function operacao(e){
        tipoOperacao = e.target.value;
        if(tipoOperacao === 'soma' || 'subtracao' || 'divisao' || 'mutiplicacao'){
            valorAnterior = num;
            setNum(0)
            
        }
    }
    function resultado(){
        let resultado = document.querySelector("#localResultado");
        if(tipoOperacao === 'soma'){
            resultado.textContent = Number(num) + Number(valorAnterior);
        }
        if(tipoOperacao === 'subtracao'){
            resultado.textContent = Number(valorAnterior) - Number(num);
        }
        if(tipoOperacao === 'divisao'){
            resultado.textContent = Number(valorAnterior) / Number(num);
        }
        if(tipoOperacao === 'mutiplicacao'){
            resultado.textContent = Number(num) *  Number(valorAnterior);
        }
    }

    return(
        <main>
            <div id="calculadora" >
                <div className="resultado" id="resultado">
                    <div id="localResultado"></div>
                </div>
                <span> <button id="ac" className="button" onClick={limpar}> AC </button></span>
                <span ><button className="operacoes" id="divisao" value="divisao" onClick={operacao}>/</button>
                </span>
                <br></br>
                <span ><button className="button tamanho"  id="num7" value={7} onClick={adicionar}>7</button>
                </span>
                <span ><button className=" button tamanho"  id="num8" value={8} onClick={adicionar} >8</button>
                </span>
                <span ><button className=" button tamanho"  id="num9" value={9} onClick={adicionar}>9</button>
                </span>
                <span> 
                    <button className="operacoes"value="mutiplicacao" onClick={operacao}>x</button>

                </span><br></br>
                <span > <button className=" button tamanho"  id="num4" value={4} onClick={adicionar}>4</button>
                </span>
                <span ><button className=" button tamanho"  id="num5"value={5} onClick={adicionar} >5</button>
                </span>
                <span ><button className=" button tamanho"  id="num6"value={6} onClick={adicionar} >6</button>
                </span>
                <span > 
                    <button className="operacoes" value="subtracao" onClick={operacao}>-</button>

                </span><br></br>
                <span > <button className="button tamanho"  id="num1"value={1} onClick={adicionar}>1</button>
                </span>
                <span ><button className="button tamanho"  id="num2" value={2} onClick={adicionar}>2</button>
                </span>
                <span ><button className="button tamanho"  id="num3"value={3} onClick={adicionar} >3</button>
                </span>
                <span> 
                    <button className="operacoes"value="soma" onClick={operacao}>+</button>

                </span><br></br>
                <span ><button className="button"  id="num0" value={0} onClick={adicionar} >0</button>
                </span>
                <span>
                    <button className="button"  id="ponto" value="." onClick={adicionar}>.</button>
                </span>
                <span> 
                    <button className="operacoes" onClick={resultado}>=</button>

                </span>

            </div>
        </main>
    )
}