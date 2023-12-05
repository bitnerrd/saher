function changeImage(x,image)
{
    if(x==1)
    {
        image.src="./images/dress11.png";
    }
    if(x==2)
    {
        image.src = "./images/dress1.png"
    }
    if(x==3)
    {
        image.src="./images/dress22.png";
    }
    if(x==4)
    {
        image.src = "./images/dress2.png";
    }
    if(x==5)
    {
        image.src="./images/dress33.png";
    }
    if(x==6)
    {
        image.src = "./images/dress3.png";
    }
    if(x==7)
    {
        image.src="./images/dress44.png";
    }
    if(x==8)
    {
        image.src = "./images/dress4.png";
    }
    if(x==9)
    {
        image.src="./images/d55.png";
    }
    if(x==10)
    {
        image.src = "./images/d5.png";
    }
    if(x==11)
    {
        image.src="./images/d66.png";
    }
    if(x==12)
    {
        image.src = "./images/d6.png";
    }
    if(x==13)
    {
        image.src="./images/d77.png";
    }
    if(x==14)
    {
        image.src = "./images/d7.png";
    }
    if(x==15)
    {
        image.src="./images/d88.png";
    }
    if(x==16)
    {
        image.src = "./images/d8.png";
    }
    if(x==17)
    {
        image.src="./images/d99.png";
    }
    if(x==18)
    {
        image.src = "./images/d9.png";
    }
    if(x==19)
    {
        image.src="./images/dAA.png";
    }
    if(x==20)
    {
        image.src = "./images/dA.png";
    }
    if(x==21)
    {
        image.src="./images/dBB.png";
    }
    if(x==22)
    {
        image.src = "./images/dB.png";
    }
    if(x==23)
    {
        image.src="./images/dCC.png";
    }
    if(x==24)
    {
        image.src = "./images/dC.png";
    }
    if(x==25)
    {
        image.src="./images/dEE.png";
    }
    if(x==26)
    {
        image.src = "./images/dE.png";
    }
    if(x==27)
    {
        image.src="./images/dFF.png";
    }
    if(x==28)
    {
        image.src = "./images/dF.png";
    }
    if(x==29)
    {
        image.src="./images/dGG.png";
    }
    if(x==30)
    {
        image.src = "./images/dG.png";
    }
    if(x==31)
    {
        image.src="./images/dHH.png";
    }
    if(x==32)
    {
        image.src = "./images/dH.png";
    }



    if(x==33)
    {
        image.src="./images/saa.png";
    }
    if(x==34)
    {
        image.src = "./images/sa.png";
    }
    
    if(x==35)
    {
        image.src="./images/sbb.png";
    }
    if(x==36)
    {
        image.src = "./images/sb.png";
    }

    if(x==37)
    {
        image.src="./images/scc.png";
    }
    if(x==38)
    {
        image.src = "./images/sc.png";
    }

    if(x==39)
    {
        image.src="./images/sdd.png";
    }
    if(x==40)
    {
        image.src = "./images/sd.png";
    }

    if(x==41)
    {
        image.src="./images/see.png";
    }
    if(x==42)
    {
        image.src = "./images/se.png";
    }

    if(x==43)
    {
        image.src="./images/sff.png";
    }
    if(x==44)
    {
        image.src = "./images/sf.png";
    }

    if(x==45)
    {
        image.src="./images/sgg.png";
    }
    if(x==46)
    {
        image.src = "./images/sg.png";
    }

    if(x==47)
    {
        image.src="./images/shh.png";
    }
    if(x==48)
    {
        image.src = "./images/sh.png";
    }

    if(x==49)
    {
        image.src="./images/sii.png";
    }
    if(x==50)
    {
        image.src = "./images/si.png";
    }

    if(x==51)
    {
        image.src="./images/sjj.png";
    }
    if(x==52)
    {
        image.src = "./images/sj.png";
    }

    if(x==53)
    {
        image.src="./images/skk.png";
    }
    if(x==54)
    {
        image.src = "./images/sk.png";
    }

    if(x==55)
    {
        image.src="./images/sll.png";
    }
    if(x==56)
    {
        image.src = "./images/sl.png";
    }

    if(x==57)
    {
        image.src="./images/smm.png";
    }
    if(x==58)
    {
        image.src = "./images/sm.png";
    }

    if(x==59)
    {
        image.src="./images/snn.png";
    }
    if(x==60)
    {
        image.src = "./images/sn.png";
    }

    if(x==61)
    {
        image.src="./images/soo.png";
    }
    if(x==62)
    {
        image.src = "./images/so.png";
    }

    if(x==63)
    {
        image.src="./images/spp.png";
    }
    if(x==64)
    {
        image.src = "./images/sp.png";
    }
}


function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });



