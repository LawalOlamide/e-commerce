import styled from 'styled-components'

export const Container = styled.div`


.productHead{
    font-size:1.5rem;
    text-align: center;
    margin:1em auto;
}

/* product div */

.products{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    margin-left:4em;
    grid-gap:3em;
    justify-content:space-evenly;
    margin-bottom:2em;
}

.product{
    border-radius:3px;
    width:25vw;
    height:53vh;
    background-color: #dde1e7;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 184, 121,.288);
}

.product:hover{
    box-shadow:inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 184, 121,.288);
}

.imgContainer{
    box-sizing:border-box;
    width:25vw;
    height:35vh;
}

img{
    object-fit:cover;
    object-position: center;
    height:100%;
    width:100%;
}

.description{
    margin:.5em;
    
}


h1{
    font-size:1.2rem;
    font-weight:100;
}

button{
    color:black;
    border:1px solid black;
    border-radius:5rem;
    background:none;
    padding:.5em .7em;
    margin-top:.2em;
    margin-left:.5em;
}

button:hover{
    border:1px solid black;
    color:white;
    background-color:black;
}

@media (max-width:850px){

    .products{
        display:block;
        margin:2em 0;
        }

    .product{
        border-radius:3px;
        width:85%;
        height:53vh;
        margin:2em auto;
    }

    .imgContainer{
        width:100%;
        height:35vh;
    }

}
`