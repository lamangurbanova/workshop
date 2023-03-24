let bars = document.querySelector(".fa-bars");
let black = document.querySelector(".black");
let hidden_menu = document.querySelector(".hidden-menu");
let close = document.querySelector(".close");
let a = document.querySelectorAll(".hidden-a");
let btn = document.querySelector(".btn");
let form = document.querySelector("form");
let thank = document.querySelector(".thank")
let morning = document.querySelector(".morning");
let lunch = document.querySelector(".lunch");
let dinner = document.querySelector(".dinner");
let wine = document.querySelector(".wine");

let meal = document.querySelector(".meal-about");


thank.style.display ="none";

bars.addEventListener("click",()=>{
    black.style.display = "block";
    hidden_menu.style.display = "block";
    /* document.body.style.overflow ="hidden"; */
    
});

close.addEventListener("click",()=>{
    black.style.display = "none";
    hidden_menu.style.display = "none";
    /* document.body.style.overflow ="scroll"; */
});

black.addEventListener("click",()=>{
    black.style.display = "none";
    hidden_menu.style.display = "none";
    /* document.body.style.overflow ="scroll"; */
});

a.forEach(item=>{
    item.addEventListener("click",()=>{
        black.style.display = "none";
        hidden_menu.style.display = "none";
        /* document.body.style.overflow ="scroll"; */
    }) 
});


btn.addEventListener("click",()=>{
    form.style.display = "none"
    thank.style.display ="flex"
});


lunch.addEventListener("click",(e)=>{

    lunch.style.color ="#E8BE7F";
    morning.style.color ="#FFF";
    dinner.style.color ="#FFF";
    wine.style.color ="#FFF";
    
    fetch('data.json')
    .then(res=>res.json())
    .then(item=>{

        let obj = "";
        let obj2 = ""

        item.slice(0,1).forEach((data)=>{
          obj += `
          <div class="left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                
                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image} alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image}  alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image}  alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image}  alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image}  alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src=${data.image} alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

            `
        })

        meal.innerHTML = obj;

    })

    e.preventDefault();
});

dinner.addEventListener("click",(e)=>{

    dinner.style.color ="#E8BE7F"
    lunch.style.color ="#fff";
    wine.style.color ="#fff";
    morning.style.color ="#fff";
    fetch('data.json')
    .then(res=>res.json())
    .then(item=>{

        let obj = "";
        let obj2 = ""

        item.slice(1,2).forEach((data)=>{
            obj += `
            <div class="left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image} alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image} alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
              `
          })       

        meal.innerHTML = obj;

    })

    e.preventDefault();
});

wine.addEventListener("click",(e)=>{

    wine.style.color ="#E8BE7F";
    lunch.style.color ="#fff";
    dinner.style.color ="#fff";
    morning.style.color ="#fff";
    fetch('data.json')
    .then(res=>res.json())
    .then(item=>{

        let obj = "";
        let obj2 = ""

        item.slice(2,3).forEach((data)=>{
            obj += `
            <div class="left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image} alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image}  alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div class="food">
                                      <div class="food-img">
                                          <img src=${data.image} alt="">
                                      </div>
                                      <div class="food-about">
                                          <div class="food-name">
                                              <h5>Lasagne</h5>
                                              <p></p>
                                              <span>$3.45</span>
                                          </div>
                                          <div class="food-description">
                                              <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
              `
          })

        

        meal.innerHTML = obj;


    })

    e.preventDefault();
});

morning.addEventListener("click",(e)=>{

    morning.style.color = "#E8BE7F";
    dinner.style.color ="#FFF"
    lunch.style.color ="#fff";
    wine.style.color ="#fff";

    let obj = "";

    obj += `
    <div class="left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                
                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 1.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 2.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 3.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 4.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 5.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="food">
                                    <div class="food-img">
                                        <img src="assets/image 6.png" alt="">
                                    </div>
                                    <div class="food-about">
                                        <div class="food-name">
                                            <h5>Lasagne</h5>
                                            <p></p>
                                            <span>$3.45</span>
                                        </div>
                                        <div class="food-description">
                                            <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `
    meal.innerHTML =obj;

    e.preventDefault();
});



let str = "jhdkj wkjed    wledjjjj      ";

let str2 = [1,2,3,"dhb"]
console.log(str.charAt(-1));










 