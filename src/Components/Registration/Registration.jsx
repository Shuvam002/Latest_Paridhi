import React from "react";
import { Main } from "./Registration.styled";
import { useParams } from "react-router-dom";
import InfoBanner from "../InfoBanner/InfoBanner";
import {
  StyledContainer,
  BottomNavbar,
  StyledLink,
} from "../Events/Events.styled";
import { GiChessQueen, GiBattleGear } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";

const DomainEvents = {
  Bug_blitz: {
    Image:
      "https://bairesdev.mo.cloudinary.net/blog/2021/01/8-Debugging-Techniques.png?tx=w_1280,q_auto",
    title: "Bug blitz",
    teamSize: 1,
    fee: 30,
    Descriptions: `Multi-year 1v1 CP debugging contest open for all participants. Join to showcase your skills in competitive programming and hone your debugging abilities.`,
    rule: "https://drive.google.com/file/d/1exu2-z0zN_d0wk7OTW6LKQIhCqrbFoi5/view?usp=drive_link",
    
  },
  web_minds: {
    Image: "https://bizmo.al/wp-content/uploads/2022/03/Web-Dev-Blog.png",
    title: "Web minds",
    teamSize: 2,
    fee: 100,
    Descriptions: `Engage in the Web Development Challenge spanning two rounds. Top performers advance to the finals, crafting captivating web pages. Finalists vie for cash prizes. Open to all years, this competition offers a platform to showcase skills, with excellence leading to recognition and rewards.`,
    rule: "https://drive.google.com/file/d/1QHecZlZLDx7lpyY1SvYiGUHkPvoeaSrs/view?usp=drive_link",
    regLink: "/events/coding/web_minds/web_mindsReg",

  },
  code_quest: {
    Image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg",
    title: "Code quest",
    teamSize: 2,
    fee: 150,
    Descriptions: `Competitive Programming contest consists of two rounds: prelims and finals. Top performers in prelims advance to finals for a chance to win lucrative cash prizes. Open to all participants across all years, it promises an exhilarating challenge and rewards excellence in coding prowess.`,
    rule: "https://drive.google.com/file/d/1i0RAs5WzalGAaBnL5a41g4t6e3tCk0RA/view?usp=drive_link",
    regLink: "/events/coding/code_quest/code_questReg",
  },
  codezen: {
    Image: "https://varthana.com/school/wp-content/uploads/2023/02/B193.jpg",
    title: "Codezen",
    teamSize: 2,
    fee: 100,
    Descriptions: `Join our exclusive CP contest tailored for first-year students and school attendees. The competition features two rounds: prelims and finals. Top performers advance to the finals for a chance to win enticing cash prizes. Don't miss this opportunity to showcase your skills and compete at the highest level!`,
    rule: "https://drive.google.com/file/d/1vx68j530eil1nM_3qHI3T6jLYQZp4-3p/view?usp=drive_link",
    regLink: "/events/coding/codezen/codezenReg",
  },

  triathlon: {
    Image: "https://i.ytimg.com/vi/aCNAoAczJBk/sddefault.jpg",
    title: "Triathlon",
    teamSize: "1-5",
    fee: 300,
    Descriptions: `"Join our bot racing contest, open to all! Click to sign up and learn the rules for this thrilling challenge. Let the excitement begin!"`,
    rule: "https://drive.google.com/file/d/1M2aCGO10zqnr1rFa7R2gtj3gJq2HsF7t/view?usp=drive_link",
    regLink: "/events/manual_robotics/triathlon/triathlonReg",
  },
  robo_klassiker: {
    Image:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/627f59e8450c5_robo-scoccer.jpg",
    title: "Robo Klassiker",
    teamSize: "1-5",
    fee: 350,
    Descriptions: `Participate in our exclusive bot soccer contest! Bots compete for goals while avoiding penalties. Enroll now and familiarize yourself with the regulations!`,
    rule: "https://drive.google.com/file/d/1g8ZYiyuAsYPBuMxPOchBKbDc1xPN3-59/view?usp=drive_link",
    regLink: "/events/manual_robotics/robo_klassiker/robo_klassikerReg",
  },
  chakravyuh: {
    Image:
      "https://media.istockphoto.com/id/1225230059/photo/3d-illustration-closeup-of-black-dark-black-labyrinth-stone-walls.jpg?s=612x612&w=0&k=20&c=Wz8P936jqq8rVYZrKKuFYjOS5i5SbKI5OdI2JN2HPik=",
    title: "Chakravyuh",
    teamSize: "1-5",
    fee: 60,
    Descriptions: `Compete in our onspot maze-solving bot challenge: navigate tunnels and reach the exclusive destination. Click to register and learn the rules!`,
    rule: "https://drive.google.com/file/d/1qtMgTyZIsjgQEeKnHA8de3AG7RAkXcP3/view?usp=drive_link",
  },
  striker_clash: {
    Image:
      "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Striker Clash",
    teamSize: 1,
    fee: 40,
    Descriptions: `Join our exclusive onspot robo carrom competition for all! Register now and uncover the rules for this thrilling event!`,
    rule: "https://drive.google.com/file/d/1iPraSPWocz9Y4C2LjFgeEUxv9_mNvA6k/view?usp=drive_link",
  },

  throne_of_bots_8kg: {
    Image:
      "https://media.wired.com/photos/59323349a3126458449936ce/4:3/w_929,h_697,c_limit/IMG_1710-1.jpg",
    title: "Throne of Bots (8kg)",
    teamSize: "1-5",
    fee: "600",
    Descriptions: `Join our heart-throbbing bot war unfer 8 kg category competition open for all!Register now and uncover the rules for this thrilling event!`,
    rule: "https://drive.google.com/file/d/1h8F65IW-K9Im89GkQjOMg_yE7L3hCjZY/view?usp=drive_link",
    regLink: "/events/combat_robotics/throne_of_bots_8kg/war_8kgReg",
  },
  throne_of_bots_15kg: {
    Image: "https://kurukshetraceg.org.in/assets/Robowars-B60LX8Oq.jpg",
    title: "Throne of Bots (15kg)",
    teamSize: "1-5",
    fee: "1000",
    Descriptions: `Join our heart-throbbing bot war competition under 15 kg category open for all!Register now and uncover the rules for this thrilling event!`,
    rule: "https://drive.google.com/file/d/1TzAbylDA8yM-ELJnszae5mlW-jFea9Oi/view?usp=drive_link",
    regLink: "/events/combat_robotics/throne_of_bots_15kg/war_15kgReg",
  },
  throne_of_bots_combo_8_15kg: {
    Image: "https://techfest.org/static/media/link2.81d14472b51ddf59813a.jpg",
    title: "Throne of Bots Combo(8 kg + 15 kg)",
    teamSize: "1-5",
    fee: "1500",
    Descriptions: `Join our heart-throbbing bot war competition open for all!Register now and uncover the rules for this thrilling event!`,
    rule: null,
  },
  soccerandrace_combo: {
    Image:
      "https://images.squarespace-cdn.com/content/v1/5971b972f9a61e57bd29b3bf/cd797d32-02d9-4e3b-a696-4dba9a1ae367/Desktop+Banner+rev1.png",
    title: "Triathlon + Robo Klassiker (Combo)",
    teamSize: "1-5",
    fee: "550",
    Descriptions: `Join our heart-throbbing bot race plus soccer competition open for all!Register now and uncover the rules for this thrilling event!`,
    rule: null,
  },
  line_trekker: {
    Image:
      "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
    title: "Line Trekker",
    teamSize: 1 - 5,
    fee: 300,
    Descriptions: `Compete in our autonomous bot challenge! Navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!`,
    rule: "https://drive.google.com/file/d/130HoyH1xz4AHDuW6IX1nS8bY04BYowiY/view?usp=drive_link",
    regLink: "/events/autonomous_robotics/line_trekker/line_trekkerReg",
  },
  setu_bandhan: {
    Image:
      "https://i.pinimg.com/originals/fc/c9/67/fcc967b7de2c1c9d9d3d9debc90aaf19.jpg",
    title: "Setu bandhan",
    teamSize: 3,
    fee: "75(college) / 60(school)",
    Descriptions: `Craft a sturdy bridge with provided ice-cream sticks and glue. The strongest design, open to all years, wins! Register now to participate!`,
    rule: "https://drive.google.com/file/d/1MUOXxXL_KRz8TzHN6BCEU3xH-bUwspGv/view?usp=sharing",
    regLink: "/events/civil/setu_bandhan/setu_bandhanReg",
  },
  trackOtreasure: {
    Image:
      "https://www.qad.com/blog/wp-content/uploads/2017/12/01.04.2018_Blog_b-min.jpg",
    title: "Track O Treasure",
    teamSize: 3,
    fee: "90(College) / 75(school)",
    Descriptions: `Embark on the challenge, solve riddles, and unearth the treasure in our exclusive treasure hunt adventure. Register now to uncover the rules and join the excitement!`,
    rule: "https://drive.google.com/file/d/1-pr-6ocmzwH-XRaUx8skRWWAtn9a4LzW/view?usp=sharing",
    regLink: "/events/civil/trackOtreasure/trackOtreasureReg",
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
    regLink: "/events/civil/mega_arch/mega_archReg",
  },
  valorant_lan: {
    Image: "https://stanforddaily.com/wp-content/uploads/2020/08/image-2.png",
    title: "Valorant Lan",
    teamSize: "5-6",
    fee: 750,
    Descriptions: `"Valorant: Where tactical prowess meets precise aim in dynamic multiplayer battles."`,
    rule: "https://drive.google.com/file/d/1Q_A8Hw-w6iLLZq6gxgaUJ159C6-UTmvd/view?usp=sharing",
    regLink: "/events/gaming/valorant_lan/valorantReg",
  },
  bgmi_lan: {
    Image:
      "https://images.hindustantimes.com/tech/img/2021/11/28/960x540/986051-pubg-mobile-bgmi_1628314432587_1638104772146.jpg",
    title: "BGMI Lan",
    teamSize: "4-5",
    fee: 500,
    Descriptions: `BGMI: Experience strategic survival, intense firefights, and victory in immersive battlegrounds.`,
    rule: "https://drive.google.com/file/d/1Mb4TLR9zdxfa6GvpvZjfXbK-J5RTrK1-/view?usp=drive_link",
    regLink: "/events/gaming/bgmi_lan/bgmiReg",
  },
  eFootball: {
    Image:
      "https://news.elbadil.com/wp-content/uploads/2023/09/eFootball-2024-4.jpg",
    title: "E-Football(PES)",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `E-Football: Dive into the virtual pitch with skill, strategy, and teamwork.`,
    rule: "https://drive.google.com/file/d/1wz5WkNk80bkb3z9ylR6s5710eZB36aLp/view?usp=drive_link",
    regLink: "/events/gaming/eFootball/pesReg",
  },
  fifa: {
    Image:
      "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Cover-standard-edition.jpg?transform=banner2x_webp",
    title: "EAFC 2024",
    teamSize: "NA",
    fee: "70",
    Descriptions: `FIFA 2024: Showcase your football mastery in thrilling global competitions.`,
    rule: "https://drive.google.com/file/d/1si2MJcA3p8CEZReBoag9qZQo3vbLC8eR/view?usp=drive_link",
  },
  ball_pool: {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzRDCGMgSw6OjSIX-7Cn1tOwiAfU8c37Mw&s",
    title: "8 Ball Pool",
    teamSize: "NA",
    fee: "NA",
    Descriptions: `8 Ball Pool 2024: Showcase your cue-sport finesse in electrifying international tournaments`,
    rule: "https://drive.google.com/file/d/19gcr15BNxgdyW-g9S7_VwbSMKYOQyTlC/view?usp=drive_link",
  },
  carrom: {
    Image:
      "https://www.mpl.live/blog/wp-content/uploads/2020/11/shutterstock_1106162195-scaled.jpg",
    title: "Carrom",
    teamSize: 2,
    fee: 80,
    Descriptions: `Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.`,
    rule: "https://drive.google.com/file/d/1rv5a16TzUJPgErDEyQkLv_7CXl_7CYc9/view?usp=drive_link",
    regLink: "/events/gaming/carrom/carromReg",
  },
  
  table_tennis: {
    Image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/momhllweruehw0ud2m2r",
    title: "Table Tennis",
    teamSize: 1,
    fee: 70,
    Descriptions: `Embark on a thrilling table tennis journey to rediscover childhood joy. Click to register and uncover the rules today!`,
    rule: "Rules coming soon",
    regLink: "/events/gaming/table_tennis/table_tennisReg",
  },
  binge_quiz: {
    Image:
      "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
    title: "Binge Quiz",
    teamSize: 2,
    fee: 40,
    Descriptions: `Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.`,
    rule: "https://drive.google.com/file/d/1NNiXESBPHj7p2nbuIMjUM9E7MJwgkvEl/view?usp=sharing",
    regLink: "/events/gaming/binge_quiz/binge_quizReg",
  },
  chess: {
    Image:
      "https://www.woodenearth.com/cdn/shop/articles/disadvantages-of-chess_1024x1024.jpg?v=1676970151",
    title: "Chess",
    teamSize: 1,
    fee: " Rs. 30 (10th & 12th May)",
    Descriptions: `Register for a chess competition to test your skills and intellect. Click to unravel the challenge and learn the rules elegantly.`,
    rule: "https://drive.google.com/file/d/1rv5a16TzUJPgErDEyQkLv_7CXl_7CYc9/view?usp=drive_link",
  },
  chess_tour: {
    Image:
      "https://npr.brightspotcdn.com/dims4/default/fdf3d80/2147483647/strip/true/crop/799x419+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F90%2Fe0%2Ffcf2474b4cefb43873d8d8f4a0e0%2F080420-provided-turkeytangochess.jpg",
    title: "Chess Championship",
    teamSize: "-",
    fee: " 500 ",
    Descriptions: `Register for a chess competition on 11.04.2024 to test your skills and intellect. Click to unravel the challenge and learn the rules elegantly.`,
    rule: "https://drive.google.com/file/d/1rv5a16TzUJPgErDEyQkLv_7CXl_7CYc9/view?usp=drive_link",
  },
  darts: {
    Image:
      "https://www.shutterstock.com/image-photo/darts-arrows-target-center-600nw-135168692.jpg",
    title: "Darts",
    teamSize: 1,
    fee: 30,
    Descriptions: `Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.`,
    rule: null,
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
            regLink={data.regLink}
          />
        )}
      </Main>
      <BottomNavbar>
        <StyledLink to="/events/coding">
          <i class="ri-code-s-slash-line"></i>
        </StyledLink>
        <StyledLink to="/events/manual_robitics">
          <i class="ri-robot-2-line"></i>
        </StyledLink>
        <StyledLink to="/events/combat_robitics">
          <GiBattleGear />
        </StyledLink>
        <StyledLink to="/events/autonomous_robitics">
          <FaUserGear />
        </StyledLink>
        <StyledLink to="/events/civil">
          <i class="ri-building-2-line"></i>
        </StyledLink>
        <StyledLink to="/events/electrical">
          <i class="ri-flashlight-line"></i>
        </StyledLink>
        <StyledLink to="/events/gaming">
          <i class="ri-gamepad-line"></i>
        </StyledLink>
        <StyledLink to="/events/general">
          <GiChessQueen />
        </StyledLink>
      </BottomNavbar>
    </>
  );
};
export default Registration;
