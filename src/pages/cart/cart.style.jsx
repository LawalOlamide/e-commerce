import styled from 'styled-components'

export const Container = styled.div`


h2{
    text-align:center;
    margin-top:1em;
}

img{
    width:100%;
    height:100%;
    object-position:center;
    object-fit:cover;
}

.cartContainer{
    width:30vw;
    height:25vh;
    display:flex;
    margin:2em auto;
    border-radius:3px;
    background-color: #dde1e7;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 184, 121,.288);
}

.cartContainer:hover{
    background-color:black;
    color:white;
}

.imgContainer{
    width:15vw;
    height:25vh;
}

.description{
    margin:2em 1em;
}

h1{
    font-size:1.2rem;
    margin-top:.2em;
    font-weight:100;
    margin-bottom:.2em;

}

.countHandler{
    display:flex;

}

input{
    width:2vw;
    height:2.2vh;
    text-align: center;
}

.btn{
    text-align: center;
    width:1.5vw;
    height:2.8vh;
}

.checkout{
    text-align: center;
    margin-bottom:1em;
}

h3{
    padding:.5em;
    font-weight:100;

}

.btn1{
    padding:.7em;
    margin:.2em .4em;
    border: none;
    background-color: #dde1e7;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 184, 121,.288);
    font-weight:bold;
}

.h1{
    text-align: center;
    font-weight:100;

}

@media (max-width:850px){

    .cartContainer{
    width:80%;
    height:22vh;
    margin:2em auto;
}

.imgContainer{
    width:60%;
    height:22vh;
}

.description{
    margin:2em .5em;
}

h1{
    font-size:1rem;
    margin-top:.5em;
}

input{
    width:4vw;
    height:2.2vh;
    text-align: center;
}

.btn{
    text-align: center;
    width:4.5vw;
    height:2.7vh;
}

.countHandler{
    margin-top:.5em;
    display:flex;

}

        
}

`