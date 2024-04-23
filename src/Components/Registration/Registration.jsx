import React from "react";
import { Main } from "./Registration.styled";
import { useParams } from "react-router-dom";
import InfoBanner from "../InfoBanner/InfoBanner";

const DomainEvents = {
  Bug_blitz: {
    Image:
      "https://bairesdev.mo.cloudinary.net/blog/2021/01/8-Debugging-Techniques.png?tx=w_1280,q_auto",
    title: "Bug blitz",
    teamSize: 1,
    fee: 50,
    Descriptions: `Multi-year 1v1 CP debugging contest open for all participants. Join to showcase your skills in competitive programming and hone your debugging abilities.`,
    rule: "https://drive.google.com/file/d/1VLLssQKDlXSm8LUCuS2Ivi0ufREwdHK9/view?usp=drive_link",
  },
  web_minds: {
    Image: "https://bizmo.al/wp-content/uploads/2022/03/Web-Dev-Blog.png",
    title: "Web minds",
    teamSize: 2,
    fee: 100,
    Descriptions: `Engage in the Web Development Challenge spanning two rounds. Top performers advance to the finals, crafting captivating web pages. Finalists vie for cash prizes. Open to all years, this competition offers a platform to showcase skills, with excellence leading to recognition and rewards.`,
    rule: "https://drive.google.com/file/d/1QHecZlZLDx7lpyY1SvYiGUHkPvoeaSrs/view?usp=drive_link",
  },
  code_quest: {
    Image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg",
    title: "Code quest",
    teamSize: 2,
    fee: 150,
    Descriptions: `Competitive Programming contest consists of two rounds: prelims and finals. Top performers in prelims advance to finals for a chance to win lucrative cash prizes. Open to all participants across all years, it promises an exhilarating challenge and rewards excellence in coding prowess.`,
    rule: "https://drive.google.com/file/d/1i0RAs5WzalGAaBnL5a41g4t6e3tCk0RA/view?usp=drive_link",
  },

  codezen: {
    Image:
      "https://varthana.com/school/wp-content/uploads/2023/02/B193.jpg",
    title: "Codezen",
    teamSize: 2,
    fee: 100,
    Descriptions: `Join our exclusive CP contest tailored for first-year students and school attendees. The competition features two rounds: prelims and finals. Top performers advance to the finals for a chance to win enticing cash prizes. Don't miss this opportunity to showcase your skills and compete at the highest level!`,
    rule: "https://drive.google.com/file/d/1vx68j530eil1nM_3qHI3T6jLYQZp4-3p/view?usp=drive_link",
  },

  triathlon: {
    Image:
      "https://lh6.googleusercontent.com/proxy/jK39yGBhSgpcgneAE_-ZhZbV6FKKqF_iPQq7a5_CaTXugcV2Afy1dviVyFFVn0Vt5XudShI9eQXBp5vYaV6Zq7QYF9cG35vLKiPx7cr0aKlcBDFpiRKMnKpX6_UtlRU",
    title: "Triathlon",
    teamSize: 5,
    fee: 400,
    Descriptions: `"Join our bot racing contest, open to all! Click to sign up and learn the rules for this thrilling challenge. Let the excitement begin!"`,
    rule: "https://drive.google.com/file/d/1H4nvTMy17kmb-M-QO5yi2omS0Kf6-8JF/view?usp=drive_link",
  },
  robo_klassiker: {
    Image:
    "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/627f59e8450c5_robo-scoccer.jpg",
    title: "Robo Klassiker",
    teamSize: 5,
    fee: 450,
    Descriptions: `Participate in our exclusive bot soccer contest! Bots compete for goals while avoiding penalties. Enroll now and familiarize yourself with the regulations!`,
    rule: "https://drive.google.com/file/d/1LI768THK0ewj_GUghM4eljnyZUiU0kJv/view?usp=drive_link",
  },
  chakravyuh: {
    Image:
      "https://media.istockphoto.com/id/1225230059/photo/3d-illustration-closeup-of-black-dark-black-labyrinth-stone-walls.jpg?s=612x612&w=0&k=20&c=Wz8P936jqq8rVYZrKKuFYjOS5i5SbKI5OdI2JN2HPik=https://media.istockphoto.com/id/1225230059/photo/3d-illustration-closeup-of-black-dark-black-labyrinth-stone-walls.jpg?s=612x612&w=0&k=20&c=Wz8P936jqq8rVYZrKKuFYjOS5i5SbKI5OdI2JN2HPik=",
    title: "Chakravyuh",
    teamSize: 1,
    fee: 60,
    Descriptions: `Compete in our onspot maze-solving bot challenge: navigate tunnels and reach the exclusive destination. Click to register and learn the rules!`,
    rule: "https://drive.google.com/file/d/1h0SY0c43S8h_q-tHRhcqAA3Tvt2xc7nF/view?usp=sharing",
  },
  striker_clash: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Striker Clash",
    teamSize: 1,
    fee: 40,
    Descriptions: `Join our exclusive onspot robo carrom competition for all! Register now and uncover the rules for this thrilling event!`,
    rule: "https://drive.google.com/file/d/1UB-hJF209ej-4cJqilfy_0gDu9WNw1ki/view?usp=sharing",
  },
  line_trekker: {
    Image:
      "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
    title: "Line Trekker",
    teamSize: 5,
    fee: 300,
    Descriptions: `Compete in our autonomous bot challenge! Navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!`,
    rule: "https://drive.google.com/file/d/14aZ7xP86NE54bNbzu7Wk011GWENIQZXO/view?usp=sharing",
  },
  setu_bandhan: {
    Image:
      "https://i.pinimg.com/originals/fc/c9/67/fcc967b7de2c1c9d9d3d9debc90aaf19.jpg",
    title: "Setu bandhan",
    teamSize: 3,
    fee: "75(college) / 60(school)",
    Descriptions: `Craft a sturdy bridge with provided ice-cream sticks and glue. The strongest design, open to all years, wins! Register now to participate!`,
    rule: "https://drive.google.com/file/d/1MUOXxXL_KRz8TzHN6BCEU3xH-bUwspGv/view?usp=sharing",
  },
  trackOtreasure: {
    Image:
      "https://www.qad.com/blog/wp-content/uploads/2017/12/01.04.2018_Blog_b-min.jpg",
    title: "Track O Treasure",
    teamSize: 3,
    fee: "90(College) / 75(school)",
    Descriptions: `Embark on the challenge, solve riddles, and unearth the treasure in our exclusive treasure hunt adventure. Register now to uncover the rules and join the excitement!`,
    rule: "https://drive.google.com/file/d/1-pr-6ocmzwH-XRaUx8skRWWAtn9a4LzW/view?usp=sharing",
  },
  cad_O_mania: {
    Image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/OP/RX/YG/6694356/autocad-designing-500x500.jpeg",
    title: "Cad O Mania",
    teamSize: 1,
    fee: 60,
    Descriptions: `ETake on the challenge: an AutoCAD drawing competition open to all. Click to register and uncover the competition rules. Join now and showcase your skills!`,
    rule: "https://drive.google.com/file/d/1NLg04SjDKFhYqFgy9pQyHnaqOJsRkbDp/view?usp=sharing",
  },
  mega_arch: {
    Image:
      "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
    title: "Mega Arch",
    teamSize: 5,
    fee: 150,
    Descriptions: `Build a load-bearing bridge using provided sand and bricks within a set time. The strongest design wins. Register for more details on this exciting challenge!`,
    rule: "https://drive.google.com/file/d/13nbgR0L5Lkf8mmQWeA-La8kbwOjVpMMw/view?usp=sharing",
  },
  valorant_lan: {
    Image:
      "https://stanforddaily.com/wp-content/uploads/2020/08/image-2.png",
    title: "Valorant Lan",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `"Valorant: Where tactical prowess meets precise aim in dynamic multiplayer battles."`,
    rule: "",
  },
  bgmi_lan: {
    Image:
      "https://images.hindustantimes.com/tech/img/2021/11/28/960x540/986051-pubg-mobile-bgmi_1628314432587_1638104772146.jpg",
    title: "BGMI Lan",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `BGMI: Experience strategic survival, intense firefights, and victory in immersive battlegrounds.`,
    rule: "",
  },
  eFootball: {
    Image:
      "https://news.elbadil.com/wp-content/uploads/2023/09/eFootball-2024-4.jpg",
    title: "E-Football",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `E-Football: Dive into the virtual pitch with skill, strategy, and teamwork.`,
    rule: "",
  },
  fifa: {
    Image:
      "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Cover-standard-edition.jpg?transform=banner2x_webp",
    title: "FIFA 24",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `FIFA 2024: Showcase your football mastery in thrilling global competitions.`,
    rule: "",
  },
  carrom: {
    Image:
      "https://www.mpl.live/blog/wp-content/uploads/2020/11/shutterstock_1106162195-scaled.jpg",
    title: "Carrom",
    teamSize: 2,
    fee: 80,
    Descriptions: `Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.`,
    rule: "",
  },
  table_tennis: {
    Image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/momhllweruehw0ud2m2r",
    title: "Table Tennis",
    teamSize: 1,
    fee: 70,
    Descriptions: `Embark on a thrilling table tennis journey to rediscover childhood joy. Click to register and uncover the rules today!`,
    rule: "",
  },
  binge_quiz: {
    Image:
      "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
    title: "Binge Quiz",
    teamSize: 2,
    fee: 40,
    Descriptions: `Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.`,
    rule: "https://drive.google.com/file/d/1NNiXESBPHj7p2nbuIMjUM9E7MJwgkvEl/view?usp=sharing",
  },
  chess: {
    Image:
      "https://www.woodenearth.com/cdn/shop/articles/disadvantages-of-chess_1024x1024.jpg?v=1676970151",
    title: "Chess",
    teamSize: 1,
    fee: 30,
    Descriptions: `Register for a chess competition to test your skills and intellect. Click to unravel the challenge and learn the rules elegantly.`,
    rule: "",
  },
  darts: {
    Image:
      "https://www.shutterstock.com/image-photo/darts-arrows-target-center-600nw-135168692.jpg",
    title: "Darts",
    teamSize: 1,
    fee: 30,
    Descriptions: `Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.`,
    rule: "",
  },
  electriQuest: {
    Image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
    title: "ElectriQuest",
    teamSize: " Maximum 2",
    fee: "60",
    Descriptions: `Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!`,
    rule: "https://drive.google.com/file/d/1R8-ihJ0IVapK4m3ogxHBWmHs-g454q--/view?usp=sharing",
  },
  powerBlitz: {
    Image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
    title: "PowerBlitz",
    teamSize: "1",
    fee: "40",
    Descriptions: `Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!`,
    rule: "https://drive.google.com/file/d/1NAubPc8fuwFogeJn886qMYfu3BJRoQ8R/view?usp=sharing",
  },
};

const Registration = () => {
  const { EventName } = useParams();
  const data = DomainEvents[EventName];
  return (
    <>
      <Main>
        {data && (
          <InfoBanner
            key={data.title}
            Image={data.Image}
            title={data.title}
            fee={data.fee}
            teamSize={data.teamSize}
            Descriptions={data.Descriptions}
            rule={data.rule}
          />
        )}
      </Main>
    </>
  );
};
export default Registration;
