import { Main } from "./DomainEvents.styled";
import { useParams } from "react-router-dom";
import Card from "../../Cards/Card";
import { motion } from "framer-motion";
import { StyledContainer,BottomNavbar,StyledLink } from "../Events.styled";
import { GiChessQueen, GiBattleGear  } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";



const DomainEvents = () => {
  const { Domain } = useParams();
  const Domains = {
    coding: [
      {
        TitleText: "Bug blitz",
        Description:
          "Join our CP debugging competition, open to all, featuring on-the-spot challenges. Click now to register for this exclusive event!",
        ImageLink:
          "https://bairesdev.mo.cloudinary.net/blog/2021/01/8-Debugging-Techniques.png?tx=w_1280,q_auto",
        link: "/events/coding/Bug_blitz",
      },

      {
        TitleText: "Web minds",
        Description:
          "Join our website development competition featuring prelims and finals, open to all, with registration and rules available here",
        ImageLink:
          "https://bizmo.al/wp-content/uploads/2022/03/Web-Dev-Blog.png",
        link: "/events/coding/web_minds",
      },
      {
        TitleText: "Code quest",
        Description:
          "Join an exclusive two-round cp competition, comprising prelims and finals, open to all years. Click here to register now!",
        ImageLink:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg",
        link: "/events/coding/code_quest",
      },

      {
        TitleText: "Codezen",
        Description:
          "Exclusive cp & mcq competition with two rounds, prelims and finals, tailored for school students and first-year participants. Click here to register!",
        ImageLink:
          "https://varthana.com/school/wp-content/uploads/2023/02/B193.jpg",
        link: "/events/coding/codezen",
      },
    ],
    manual_robotics: [
      {
        TitleText: "Triathlon",
        Description:
          "Join our exclusive bot racing competition, open to all years! Click to register and learn the rules for the challenge.",
        ImageLink:
          "https://i.ytimg.com/vi/aCNAoAczJBk/sddefault.jpg",
        link: "/events/manual_robotics/triathlon",
      },
      {
        TitleText: "Robo Klassiker",
        Description:
          "Join our exclusive bot soccer competition! Bots vie for goals while minimizing penalties. Register now and learn the rules!",
        ImageLink:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/627f59e8450c5_robo-scoccer.jpg",
        link: "/events/manual_robotics/robo_klassiker",
      },
      {
        TitleText: "Chakravyuh",
        Description:
          "Compete in the onspot maze-solving bot challenge, navigate tunnels, reach the exclusive destination. Click to register and learn rules!",
        ImageLink:
          "https://media.istockphoto.com/id/1225230059/photo/3d-illustration-closeup-of-black-dark-black-labyrinth-stone-walls.jpg?s=612x612&w=0&k=20&c=Wz8P936jqq8rVYZrKKuFYjOS5i5SbKI5OdI2JN2HPik=",
        link: "/events/manual_robotics/chakravyuh",
      },
      {
        TitleText: "Striker Clash",
        Description:
          "Join the exclusive onspot robo carrom competition for all, register now, and discover the rules for this thrilling event!",
        ImageLink:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/6409c273acb67_9.jpg?d=600x600",
        link: "/events/manual_robotics/striker_clash",
      },
      // {
      //   TitleText: "Triathlon + Robo Klassiker (Combo)",
      //   Description:
      //     "Join the heart-pounding bot racing and soccer competition , open to all years! Click to register and learn the rules for the challenge. ",
      //   ImageLink:"https://images.squarespace-cdn.com/content/v1/5971b972f9a61e57bd29b3bf/cd797d32-02d9-4e3b-a696-4dba9a1ae367/Desktop+Banner+rev1.png",
      //      link: "/events/manual_robitics/soccerandrace_combo",
      // },
    ],
      combat_robotics: [
      {
        TitleText: "Throne of Bots (8kg)",
        Description:
          "Join the heart-pounding bot fighting competition , open to all years! Click to register and learn the rules for the challenge. ",
        ImageLink:"https://media.wired.com/photos/59323349a3126458449936ce/4:3/w_929,h_697,c_limit/IMG_1710-1.jpg",
          link: "/events/combat_robotics/throne_of_bots_8kg",
      },
      {
        TitleText: "Throne of Bots (15kg)",
        Description:
          "Join the heart-pounding bot fighting competition , open to all years! Click to register and learn the rules for the challenge. ",
        ImageLink:
          "https://kurukshetraceg.org.in/assets/Robowars-B60LX8Oq.jpg",
          
        link: "/events/combat_robotics/throne_of_bots_15kg",
      },
      // {
      //   TitleText: "Throne of Bots (Combo 8kg & 15kg)",
      //   Description:
      //     "Join the heart-pounding bot fighting competition , open to all years! Click to register and learn the rules for the challenge. ",
      //   ImageLink:
      //   "https://techfest.org/static/media/link2.81d14472b51ddf59813a.jpg",
      //      link: "/events/combat_robitics/throne_of_bots_combo_8_15kg",
      // },
     
    ],
    autonomous_robotics: [
      {
        TitleText: "Line Trekker",
        Description:
          "Compete in our autonomous bot challenge, navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!",
        ImageLink:
          "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
        link: "/events/autonomous_robotics/line_trekker",
      },
    ],
    combo_robotics:[
      {
        TitleText: "Throne of Bots Combo",
        Description:
          "Introducing the 'Titan's Fury' War Combo: 8 kg powerhouse armed with precision strikes and a 15 kg juggernaut built for endurance. Dominate the arena with our lethal dual-bot assault",
        ImageLink:
          "https://sa-asimov.nl/wp-content/uploads/2022/06/battlebots.png",
        link: "/events/combo_robotics/combowar8_15",
      },
      {
        TitleText: "Manual Robotics Combo",
        Description:
          `Join the exhilarating Robo Race and Robo Soccer competitions! Unleash your robot's agility and speed in the ultimate showdown of innovation and teamwork. Experience the future of sports and technology!`,
        ImageLink:
          "https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/oscar/news/2022/robo-race4-800.png?sfvrsn=65946e11_2",
        link: "/events/combo_robotics/race_soccer",
      },
      {
          TitleText: "Manual + Combat Robotics 8kg Combo",
          Description:
            "Join us for the ultimate tech showdown! Compete in Robo Race, Robo Soccer, and the thrilling Throne of Bots, 8 kg division. Test your bots' prowess in these electrifying challenges!",
          ImageLink:
            "https://design1st.com/wp-content/uploads/2023/02/battlebots-2018-competition-1.png",
        link: "/events/combo_robotics/race_soccer_8kg",
      },
      {
        TitleText: "Manual + Combat Robotics 15kg Combo",
        Description:
          "Gear up for adrenaline-fueled action! Join us in the ultimate showdown of Robo Race, Robo Soccer, and Throne of Bots (15kg class). Unleash your bot's prowess in a thrilling competition of speed, skill, and strategy.",
        ImageLink:
          "https://s.hdnux.com/photos/34/47/07/7500252/7/1200x0.jpg",
        link: "/events/combo_robotics/race_soccer_15kg",
      },
      {
        TitleText: "Manual + Combat Robotics Combo",
        Description:
          `Enter the Throne of Bots with our dynamic duo: "War Combo" for 8 kg and 15 kg classes, showcasing power and agility. Also, engage in Robo Race and Robo Soccer for ultimate robotic supremacy!`,
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY43of2ZRZySnOMHDOCSSSQJOitKTuJskES6vKmc2zuN5cUgZNwSXD1xhujrECJu8ekNg&usqp=CAU",
        link: "/events/combo_robotics/race_soccer_8_15kg",
      },
      
    ],
    civil: [
      {
        TitleText: "Setu bandhan",
        Description:
          "Create a sturdy bridge using provided ice-cream sticks and glue; the strongest design, exclusive for all years, wins. Register now!",
        ImageLink:
          "https://i.pinimg.com/originals/fc/c9/67/fcc967b7de2c1c9d9d3d9debc90aaf19.jpg",
        link: "/events/civil/setu_bandhan",
      },
      {
        TitleText: "Track O Treasure",
        Description:
          "Unravel the challenge, solve riddles, and discover the treasure in this exclusive treasure hunt adventure. Register now and learn the rules!",
        ImageLink:
          "https://www.qad.com/blog/wp-content/uploads/2017/12/01.04.2018_Blog_b-min.jpg",
        link: "/events/civil/trackOtreasure",
      },
      {
        TitleText: "CAD_O_MANIA",
        Description:
          "Embark on the challenge: an AutoCAD drawing competition open to all. Click to register and unveil the competition rules.",
        ImageLink:
          "https://5.imimg.com/data5/SELLER/Default/2023/2/OP/RX/YG/6694356/autocad-designing-500x500.jpeg",
        link: "/events/civil/cad_O_mania",
      },
      {
        TitleText: "Mega Arch",
        Description:
          "Construct a load-bearing bridge using provided sand and bricks within a set time. The most robust design wins. Register for details.",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/mega_arch",
      },
    ],
    gaming: [
      {
        TitleText: "Valorant LAN",
        Description:
          "Valorant: Tactical prowess meets precise aim in dynamic multiplayer battles.",
        ImageLink:
          "https://stanforddaily.com/wp-content/uploads/2020/08/image-2.png",
        link: "/events/gaming/valorant_lan",
      },
      {
        TitleText: "BGMI",
        Description:
          "BGMI: Strategic survival, intense firefights, and victory in immersive battlegrounds.",
        ImageLink:
          "https://images.hindustantimes.com/tech/img/2021/11/28/960x540/986051-pubg-mobile-bgmi_1628314432587_1638104772146.jpg",
        link: "/events/gaming/bgmi_lan",
      },
      {
        TitleText: "E-football(PES)",
        Description:
          "E-Football: Experience the virtual pitch with skill, strategy, and teamwork.",
        ImageLink:
          "https://news.elbadil.com/wp-content/uploads/2023/09/eFootball-2024-4.jpg",
        link: "/events/gaming/eFootball",
      },
      {
        TitleText: "EAFC 2024",
        Description:
          "EAFC 2024: Dominate the digital pitch with your unrivaled football skills in electrifying worldwide tournaments.",
        ImageLink:
          "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Cover-standard-edition.jpg?transform=banner2x_webp",
        link: "/events/gaming/fifa",
      },
      {
        TitleText: "8 Ball Pool",
        Description:
          "8 Ball Pool: Showcase your cue-sport finesse in electrifying international tournaments.",
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzRDCGMgSw6OjSIX-7Cn1tOwiAfU8c37Mw&s",
        link: "/events/gaming/ball_pool",
      },
    ],
    general: [
      {
        TitleText: "Carrom",
        Description:
          "Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.",
        ImageLink:
          "https://www.mpl.live/blog/wp-content/uploads/2020/11/shutterstock_1106162195-scaled.jpg",
        link: "/events/general/carrom",
      },
      {
        TitleText: "Table Tennis",
        Description:
          "Embark on a thrilling table tennis journey to rediscover your childhood joy. Click to register and uncover the rules today!",
        ImageLink:
          "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/momhllweruehw0ud2m2r",
        link: "/events/general/table_tennis",
      },
      {
        TitleText: "Binge Quiz",
        Description:
          "Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
        link: "/events/general/binge_quiz",
      },
      {
        TitleText: "Chess",
        Description:
          "Register for an onspot chess competition to test your skills & intellect. Click to unravel the challenge and learn the rules elegantly.",
        ImageLink:
          "https://www.woodenearth.com/cdn/shop/articles/disadvantages-of-chess_1024x1024.jpg?v=1676970151",
        link: "/events/general/chess",
      },

      {
        TitleText: "Chess Championship",
        Description:
          "Register for an inter-college Chess Tournament to test your skills & intellect. Click to unravel the challenge and learn the rules elegantly.",
        ImageLink:
          "https://npr.brightspotcdn.com/dims4/default/fdf3d80/2147483647/strip/true/crop/799x419+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F90%2Fe0%2Ffcf2474b4cefb43873d8d8f4a0e0%2F080420-provided-turkeytangochess.jpg",
        link: "/events/general/chess_tour",
      },
      {
        TitleText: "Darts",
        Description:
          "Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.",
        ImageLink:
          "https://www.shutterstock.com/image-photo/darts-arrows-target-center-600nw-135168692.jpg",
        link: "/events/general/darts",
      },
    ],
    electrical: [
      {
        TitleText: "ElectriQuest",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
        link: "/events/electrical/electriQuest",
      },
      {
        TitleText: "PowerBlitz",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/electrical/powerBlitz",
      },
    ],
  };

  return (
    <>
      <Main>
        {Domains[Domain] &&
          Domains[Domain].map((data, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
                delay: index * 0.2,
              }}
            >
              <Card
                key={data.TitleText}
                TitleText={data.TitleText}
                Description={data.Description}
                ImageLink={data.ImageLink}
                link={data.link}
              />
            </motion.div>
          ))}
      <BottomNavbar>
          <StyledLink to="/events/coding"><i className="ri-code-s-slash-line"></i></StyledLink>
          <StyledLink to="/events/robotics"><i className="ri-robot-2-line"></i></StyledLink>
          <StyledLink to="/events/civil"><i className="ri-building-2-line"></i></StyledLink>
          <StyledLink to="/events/electrical"><i className="ri-flashlight-line"></i></StyledLink>
          <StyledLink to="/events/gaming"><i className="ri-gamepad-line"></i></StyledLink>
          <StyledLink to="/events/general"><GiChessQueen /></StyledLink>
      </BottomNavbar>
      </Main>
    </>
  );
};

export default DomainEvents;
