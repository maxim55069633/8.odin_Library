let myCinema = [];

function Anime(title, episode, date, score, status, image, description  ) {
  // the constructor...
  this.title=title;
  this.episode=episode;
  this.date=date;
  this.score=score;
  this.status=status;
  this.image=image;
  this.description=description;
}

// five existing animes
const dragon_ball=new Anime(
  "Dragon Ball Z",
  "291",
  "1989-04-26",
  "8.15",
  "Unwatched",
  "./images/dragonball.jpg",
  "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others. With his failed attempt at forcibly recruiting Gokuu as an ally, Raditz warns Gokuu's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z."
)

const great_teacher_onizuka=new Anime(
  "Great Teacher Onizuka",
  "43",
  "1999-06-30",
  "8.69 ",
  "Unwatched",
  "./images/onizuka.jpeg",
  "Twenty-two-year-old Eikichi Onizuka—ex-biker gang leader, conqueror of Shonan, and virgin—has a dream: to become the greatest high school teacher in all of Japan. This isn't because of a passion for teaching, but because he wants a loving teenage wife when he's old and gray. Still, for a perverted, greedy, and lazy delinquent, there is more to Onizuka than meets the eye. So when he lands a job as the homeroom teacher of the Class 3-4 at the prestigious Holy Forest Academy—despite suplexing the Vice Principal—all of his talents are put to the test, as this class is particularly infamous. Due to their utter contempt for all teachers, the class' students use psychological warfare to mentally break any new homeroom teacher they get, forcing them to quit and leave school. However, Onizuka isn't your average teacher, and he's ready for any challenge in his way. Bullying, suicide, and sexual harassment are just a few of the issues his students face daily. By tackling the roots of their problems, Onizuka supports them with his unpredictable and unconventional methods—even if it means jumping off a building to save a suicidal child. Thanks to his eccentric charm and fun-loving nature, Class 3-4 slowly learns just how enjoyable school can be when you're the pupils of the Great Teacher Onizuka."
)

const naruto=new Anime(
  "Naruto",
  "220",
  "2002-10-03",
  "7.97",
  "Unwatched",
  "./images/naruto.jpg",
  "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes."
)

const yu_gi_oh=new Anime(
  "Yu☆Gi☆Oh! Duel Monsters",
  "224",
  "2000-04-18",
  "7.47",
  "Unwatched",
  "./images/yugioh.jpeg",
  `Legend says that the enigmatic Millennium Puzzle will grant one wish to whoever deciphers its ancient secrets. Upon solving it, high school student Yuugi Mutou unleashes "another Yuugi," a peculiar presence contained inside. Now, whenever he is faced with a dilemma, this mysterious alter ego makes an appearance and aids him in his troubles. Wishing to unravel the mystery behind this strange spirit, Yuugi and his companions find themselves competing with several opponents in "Duel Monsters," a challenging card game used by people seeking to steal the Millennium Puzzle in a desperate attempt to harness the great power within. As the questions pile on, it is not long before they figure out that there is more than pride on the line in these duels.`
)

const chuuka_ichiban=new Anime(
  "CHUUKA ICHIBAN!",
  "52",
  "1997-04-27",
  "7.61",
  "Unwatched",
  "./images/chuuka_ichiban.jpeg",
  `The story takes place in 19th century China during the Qing Dynasty, where the Emperor was weakened and the country was close to chaos. It is also during a fictitious era called "The Era of the Cooking Wars". It was an era in which top chefs with different cooking styles tried their best to improve their skills and to become the best chef in China. It is a country where insulting a high-grade chef or fooling around with cooking could land a person in a jail, and impersonating a top-chef is as good as usurpation of authority. Chefs compete with each other in order to gain respect and even power, but also with the risks of losing everything. The country of China has four major regions: Beijing, Szechuan, Shanghai, and Guangdong. The beginning of the story takes place in Szechuan, Mao's birthplace. After the death of Mao's mother, Pai, who was called the 'Fairy of Cuisine', Mao becomes a Super Chef in order to take the title as Master Chef of his mother's restaurant. However, before he takes his mother's place as Master Chef, he continues to travel China in order to learn more of the many ways of cooking, in the hopes of becoming a legendary chef, just like his mother. During his journey, he meets great friends and fierce rivals who wish to challenge him in the field of cooking.`
)


myCinema.push(dragon_ball);
myCinema.push(great_teacher_onizuka);
myCinema.push(naruto);
myCinema.push(yu_gi_oh);
myCinema.push(chuuka_ichiban);

// different functions

function display_cards() {
  let card_container=document.querySelector(".animeshelf");
  card_container.textContent=""; 
  for(let j=0; j<myCinema.length; j++)
  {
      let card_div =document.createElement('div');
      card_div.classList.add("card_div")
      
      let card_img=new Image();
      card_img.src=myCinema[j].image;
      card_img.setAttribute("alt", myCinema[j].title); //set the alt attribute the same value like title
      card_div.appendChild(card_img);

      let cross_span=document.createElement("span");
      cross_span.innerHTML=`
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
    </svg>`;

      let tick_span=document.createElement("span");
      tick_span.innerHTML=`
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" />
    </svg>`;
    

      cross_span.classList.add("cross_span");
      card_div.appendChild(cross_span);

      tick_span.classList.add("tick_span");
      card_div.appendChild(tick_span);

      card_container.appendChild(card_div);
  }
}

function display_details(e){


  const to_be_removed=document.querySelector(".to_be_removed");
  to_be_removed.classList.add("hide");
  const detail = document.querySelector(".detail");
  detail.classList.remove("hide");

  const detail_title=document.querySelector(".info_title");
  const detail_episode=document.querySelector(".info_episode");
  const detail_date=document.querySelector(".info_date");
  const detail_score=document.querySelector(".info_score");
  const detail_status=document.querySelector(".info_status");
  const detail_image=document.querySelector(".info_image");
  const detail_description=document.querySelector(".info_description");

  
  // detail_title.textContent
  let image_title=e.target.alt; //the title of the anime
  const anime_in_cinema=myCinema[find_the_anime(image_title)];
  
  document.querySelector(".align-title").textContent="Title: ";
  detail_title.textContent= anime_in_cinema.title;
  document.querySelector(".align-episode").textContent="Episode: ";
  detail_episode.textContent=anime_in_cinema.episode;
  document.querySelector(".align-date").textContent="Date: ";
  detail_date.textContent=anime_in_cinema.date;
  document.querySelector(".align-score").textContent="Score: ";
  detail_score.textContent=anime_in_cinema.score+"/10";
  document.querySelector(".align-status").textContent="Status: ";
  detail_status.textContent=anime_in_cinema.status;
  
  if(detail_image.firstChild !== null)
    detail_image.removeChild(detail_image.firstChild);
  //remove the existing image

  const detail_image_tag=new Image();
  detail_image_tag.src=anime_in_cinema.image;
  detail_image_tag.alt=anime_in_cinema.title;
  detail_image_tag.classList.add("image_detail");
  detail_image.appendChild(detail_image_tag);

  document.querySelector(".align-description").textContent="Description: ";
  detail_description.textContent=anime_in_cinema.description;
}

// Find the index of an element according to the title
function find_the_anime(image_title){
  for (let index in myCinema){
    if(myCinema[index].title===image_title)
      return index;
  }
}


// Change the status of an anime
function change_status(e){

  let image_title=this.parentNode.firstChild.alt; //the title of the anime
  console.log(image_title);
  const target_anime=myCinema[find_the_anime(image_title)];
  if(target_anime.status === "Unwatched")
  {
    this.style.color="blue";
    myCinema[find_the_anime(image_title)].status="Watched";
  }
  else
  {
    this.style.color="black";
    myCinema[find_the_anime(image_title)].status="Unwatched";
  }

  if(document.querySelector(".info_status")!==null 
  && image_title===document.querySelector(".info_title").textContent )
  // if the toggled status doesn't belong to the current display anime, don't change the display anime's status
    document.querySelector(".info_status").innerHTML=myCinema[find_the_anime(image_title)].status;
}


// Delete the card
function delete_card(e){
  // remove the card from the animeshelf
  const animeshelf_node = document.querySelector(".animeshelf");
  animeshelf_node.removeChild(this.parentNode);
  // remove the item from the Array myCinema
  let delete_index=find_the_anime(this.parentNode.childNodes[0].alt);
  myCinema.splice(delete_index,1);

  const detail = document.querySelector(".detail");
  detail.classList.add("hide");
  const to_be_removed=document.querySelector(".to_be_removed");
  to_be_removed.classList.remove("hide");
}

// Control the modal
let modal =document.querySelector(".modal");

let btn=document.querySelector(".add_new_anime");

let close_span=document.querySelector(".close");

let cancel_button=document.querySelector(".cancel");

btn.onclick=function(){
  modal.style.display="block";
}

close_span.onclick=function(){
  modal.style.display="none";
}

cancel_button.onclick=function(){
  modal.style.display="none";
}

window.onclick=function(e){
  if(e.target == modal){
    modal.style.display="none";
  }
}



display_cards();

let my_cards = document.querySelectorAll(".card_div>img");
let status_buttons=document.querySelectorAll(".tick_span");
let delete_buttons = document.querySelectorAll(".cross_span");

// Submit the form data and store it
document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);

  const newly_added_anime=new Anime(
    formData.get("form_title"),
    formData.get("form_episode"),
    formData.get("form_date"),
    formData.get("form_score"),
    formData.get("form_status"),
    "./images/placeholder.png",
    formData.get("form_description")
    );

  myCinema.push(newly_added_anime);

  let modal =document.querySelector(".modal");
  modal.style.display="none";
  // close the modal after a "submit"
  display_cards();
  e.preventDefault(); 

  // Reassign the elements since they are recreated 
  my_cards = document.querySelectorAll(".card_div>img");
  status_buttons=document.querySelectorAll(".tick_span");
  delete_buttons = document.querySelectorAll(".cross_span");

  my_cards.forEach(unit=> unit.addEventListener('click', display_details)
  );
  status_buttons.forEach(unit=>unit.addEventListener('click', change_status)
  );
  delete_buttons.forEach(unit=>unit.addEventListener('click', delete_card)
  );
});


// EventListeners for displaying the details, changing the watch status and deleting the cards
my_cards.forEach(unit=> unit.addEventListener('click', display_details)
);
status_buttons.forEach(unit=>unit.addEventListener('click', change_status)
);
delete_buttons.forEach(unit=>unit.addEventListener('click', delete_card)
);