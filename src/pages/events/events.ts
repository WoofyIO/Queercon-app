import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

/* import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; */


@Component({
  templateUrl: 'events-details.html',
})

export class EventsDetailsPage {
  item;
  private webWiew: any = window;

  constructor(public platform: Platform, params: NavParams) {
    
    this.item = params.data.item;

    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC event-details.ts: ' + this.item.title);		
    }  

    
  }

  openEventReservation() {
    window.open(this.item.reservation, '_system', 'location=yes');
  }

  openEventMap() {
    window.open(this.item.map, '_system', 'location=yes');
  }

}

@Component({
 templateUrl: 'events.html',
})
export class EventsPage {

private webWiew: any = window;

  items = [];
  constructor(public platform: Platform, public nav: NavController, /* public http: Http */) {
    console.log('QC Events constructor loaded');
    
    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC events.ts');		
    }  

/*     let localData = this.http.get('events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
    }) */


    //
    //
    //
    //
    //
    // QC LOCALS!! This bellow is the bit to edit and add what you need to :)
    //
    //
    //
    //

    this.items = [
      {
        "title": "Poco Social Hour",
        "location": "Poco Wine + Spirits, Seattle",
        "summary": "Enjoy a cocktail and some socialization every Thursday!",
        "date": "EVERY THUR",
        "hours": "19:30 - 22:00",
        "icon1": "[21+]",
        "description": "Every Thursday, many Seattle QC attendees gather for drinks and socializing before wandering home or out to the bars. Please know, Poco is a 21+ venue, sorry... Watch for other special events for everyone!",
        "map": "https://goo.gl/maps/WvmC2ejHhem",
        "reservation": "https://www.facebook.com/groups/queerconsea/",
        "host": "SEA"
      },
      {
        "title": "Queercon @ HOPE - Friday Social",
        "location": "Flatiron Hall",
        "summary": "Queercon Friday Social",
        "date": "FRI 20 JUL",
        "hours": "17:00 - 19:00",
        "icon1": "",
        "description": "Meet us at the HOPE Registration Desk at 17:00 EDT and we will take a short 10-minute walk to Flatiron Hall for some social time. Come and meet new people, get reacquainted with old friends.",
        "map": "https://goo.gl/maps/9qMFJCLMxvy",
        "reservation": "https://www.facebook.com/events/1976853352566334/",
        "host": "NYC"
      },
      {
        "title": "Queercon @ HOPE - Friday Bar Night",
        "location": "Flaming Saddles",
        "summary": "Queercon Friday Bar Night",
        "date": "FRI 20 JUL",
        "hours": "21:00 - ?",
        "icon1": "[21+]",
        "description": "Country & Western themed gay bar with dancing bartenders! What could be more fun than that? We'll start at this fun establishment check out other bars in the Hell's Kitchen neighborhood.",
        "map": "https://goo.gl/maps/jdxv7rbBQJt",
        "reservation": "https://www.facebook.com/events/1976853352566334/",
        "host": "NYC"
      },
      {
        "title": "BSidesLV Mixer",
        "location": "Tuscany Suites Poolside",
        "summary": "Start the week with Queercon at BSidesLV",
        "date": "TUE 07 AUG",
        "hours": "19:00 - 21:00",
        "icon1": "[18+]",
        "description": "To start off the week Queercon will have its annual Poolside Mixer at BSidesLV.  If you’re in town for BSidesLV, swing by for a drink.",
        "map": "https://goo.gl/maps/CiR9w3vp7Kw",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "BlackHat Queercon Mixer",
        "location": "Mandalay Bay, South Pacific G",
        "summary": "BlackHat welcomes Queercon back for an afternoon Mixer.",
        "date": "WED 08 AUG",
        "hours": "16:00 - 18:00",
        "icon1": "[18+][Blackhat Pass Req]",
        "description": "BlackHat welcomes Queercon back for an afternoon Mixer. Swing by the Mandalay Bay and trek down to South Pacific G to meet and mingle with other LGBTQ BlackHat goers. We may even bring a few surprise passes to the Queercon VIP Reception - Come by for your chance to win.",
        "map": "https://goo.gl/maps/AtsRDsxhoH12",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "VIP Welcome Reception",
        "location": "QC Lounge",
        "summary": "VIP welcome reception for sponsors and partners",
        "date": "WED 08 AUG",
        "hours": "20:00 - 00:00",
        "icon1": "",
        "description": "Queercon welcomes our sponsors and partners with an intimate welcome reception in the Queercon Lounge.  Invite only (our only closed-invite event!).",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Breakfast",
        "location": "QC Lounge",
        "summary": "Breakfast",
        "date": "THU 09 AUG",
        "hours": "08:00 - 11:00",
        "icon1": "",
        "description": "Before you head to the DEF CON lines to get your DC26 badge, swing by the lounge for breakfast - bagels and assorted pastries available.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Swag and Info Booth",
        "location": "Queercon Swag & Info",
        "summary": "Come get your swag!",
        "date": "THU 09 AUG",
        "hours": "10:00 - 18:00, 20:00 - 00:00",
        "icon1": "",
        "description": "Badges, T-shirts, accessories, and all the other information you may need.  The Queercon Swag and Info booth is open to show off our awesome QC stuff, fill you in on all of the events, and get you hooked up with a Queercon Badge (which will be needed for our evening events).",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "https://queercon.org/shop/catalogue/",
        "host": "Queercon"
      },
      {
        "title": "Opening Ceremonies",
        "location": "QC Lounge",
        "summary": "Welcome to Queercon 15",
        "date": "THU 09 AUG",
        "hours": "11:00 - 12:00",
        "icon1": "",
        "description": "Speaker: Jason Painter - Welcome to Queercon 15.  Whether this is your first year or your 10th, come learn about everything that we have going on for this year so you don’t miss out on any of the fun.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Promether Kickoff Party",
        "location": "QC Lounge",
        "summary": "Join us for drinks at the Promether Party.",
        "date": "THU 09 AUG",
        "hours": "12:00 - 14:30",
        "icon1": "[BADGE]",
        "description": "Join us for drinks at the Promether Party. Promether is a decentralized privacy network that implements all the networking, security, and anonymity code that applications and platforms need to protect their data.  Through an adaptive symbiotic relationship between different layers, Promether makes securing applications easy, while protecting the privacy of its users and rewarding those who contribute to the capacity of the network.  Welcome to the end of surveillance and a new era of online privacy. Sponsored by Promether https://www.promether.com/",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Building a Culture of Consent in LGBT Tech - There’s No App for That",
        "location": "QC Lounge",
        "summary": "Facilitated conversation around consent.",
        "date": "THU 09 AUG",
        "hours": "15:00 - 16:00",
        "icon1": "",
        "description": "Speaker: Jo Langford, M.A. - Facilitated conversation around consent, boundaries, the roles we assume in flirting, sexual attraction, and courtship, as well as how these play out differently in straight and queer cultures.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Mixer",
        "location": "QC Lounge",
        "summary": "Mix and mingle",
        "date": "THU 09 AUG",
        "hours": "16:00 - 18:00",
        "icon1": "",
        "description": "Join us in the Queercon Lounge for the first Queercon Mixer of DEF CON.  Come find old friends, and make some new ones, in the Queercon Lounge at Caesars. No DEF CON badge required; Open to all LGBTQ, as well as friends and allies.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Kickoff Party",
        "location": "QC Lounge",
        "summary": "Queercon 15 Kickoff",
        "date": "THU 09 AUG",
        "hours": "20:00 - 03:00",
        "icon1": "[18+][BADGE]",
        "description": "Let’s get started! Join us in the Queercon Lounge starting for our Kickoff Party. Come mingle with everyone as we celebrate 15 Years of LGBTQ+ Hacking!",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Breakfast",
        "location": "QC Lounge",
        "summary": "Breakfast",
        "date": "FRI 10 AUG",
        "hours": "08:00 - 11:00",
        "icon1": "",
        "description": "Swing in for a light breakfast and coffee before you head down to DEFCON.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Swag and Info Booth",
        "location": "Queercon Swag & Info",
        "summary": "Come get your swag!",
        "date": "FRI 10 AUG",
        "hours": "10:00 - 18:00",
        "icon1": "",
        "description": "Badges, T-shirts, accessories, and all the other information you may need.  The Queercon Swag and Info booth is open to show off our awesome QC stuff, fill you in on all of the events, and get you hooked up with a Queercon Badge (which will be needed for our evening events).",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "https://queercon.org/shop/catalogue/",
        "host": "Queercon"
      },
      {
        "title": "QC 15 Badge Talk",
        "location": "QC Main",
        "summary": "Come learn all of the secrets and struggles behind the Queercon 15 badge.",
        "date": "FRI 10 AUG",
        "hours": "12:00 - 13:30",
        "icon1": "",
        "description": "Speakers: Evan MacKay, George Louthan, Jonathan Nelson - The Queercon Badge team has done it again. Come learn all of the secrets and struggles behind the Queercon 15 badge. You can also learn how to get a Queercon 16 badge and maybe there will be a few of this years around.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Diversity & Recruitment Expo",
        "location": "QC Equality Room",
        "summary": "Meet with partner companies that support diversity and equality.",
        "date": "FRI 10 AUG",
        "hours": "12:00 - 18:00",
        "icon1": "",
        "description": "We have a number of companies that partner with Queercon to support diversity and equality.  Stop into the new Queercon Equality room and talk to those companies that are making a difference in the community.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "QC Puzzles and Challenges",
        "location": "QC Main",
        "summary": "",
        "date": "FRI 10 AUG",
        "hours": "13:30 - 14:00",
        "icon1": "",
        "description": "Speaker: Subterfuge",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "50k Shades of Gay",
        "location": "QC Main",
        "summary": "",
        "date": "FRI 10 AUG",
        "hours": "14:00 - 15:00",
        "icon1": "",
        "description": "Speaker: Trever Faden - There’s a new app that lets you see who blocked you on Grindr. The cost? Your Grindr credentials and control of your account -- including access to those NSFW photos you once sent. In 50k Shades of Gay, Trever explores how his app, C*ckBlocked, grew to national spotlight and gained the trust and credentials of 50,000 Grindr users over a 5 day period. Through reflection on his experiences, Trever identifies key vulnerabilities in today's fast paced news cycles, how bad actors can exploit those weaknesses to gain public trust, and how we, as the good guys, can use technology to protect our community.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Women of Queercon",
        "location": "QC Chill 1",
        "summary": "Join us for the Women of Queercon meetup.",
        "date": "FRI 10 AUG",
        "hours": "15:00 - 16:00",
        "icon1": "",
        "description": "Whether trans, lesbian, bi, queer, or ally, all women are important and welcomed at Queercon. Join us for the Women of Queercon meetup.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Furries and Kinksters Meetup",
        "location": "QC Chill 2",
        "summary": "DEF CON Furs meetup.",
        "date": "FRI 10 AUG",
        "hours": "15:00 - 16:00",
        "icon1": "[18+]",
        "description": "DEF CON Furs is a group of members of the furry fandom and their friends, that organizes events and parties at DEF CON for the infosec community. We are a puppy, kinky, alternative, and queer friendly group that hosts a safe space where the community can meet up and share adult interests.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Mixer",
        "location": "QC Main",
        "summary": "Mix and mingle",
        "date": "FRI 10 AUG",
        "hours": "16:00 - 18:00",
        "icon1": "",
        "description": "Mix & mingle and don’t forget to upload to Dropbox. Join us in the Queercon Lounge for our afternoon mixer. Find some new friends and get a drink with our amazing Queercon bartenders. Sponsored by: Dropbox",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon 15 Pool Party",
        "location": "Palms Place Pool",
        "summary": "Come join us for our epic pool party",
        "date": "FRI 10 AUG",
        "hours": "20:00 - 03:00",
        "icon1": "[21+]",
        "description": "Break out your speedo and get your unicorns ready. Come join us for our epic pool party at Palms Place rooftop pool. Once again the amazing Queercon DJ’s will be keeping us going as we celebrate 15 years of LGBTQ+ Hacking in the way that Queercon knows best - a massive pool party. Featuring: DJ Pumpkin Spice, Skittish & Bus, and Bret Law. Sponsored by Bugcrowd",
        "map": "https://goo.gl/maps/LEZwDAzN8et",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Breakfast",
        "location": "QC Main",
        "summary": "Breakfast",
        "date": "SAT 11 AUG",
        "hours": "08:00 - 11:00",
        "icon1": "",
        "description": "You might find you need some coffee to kickstart your morning after the Pool Party.  Stop into the QC Lounge and get your caffeine fix before you start off the day.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Swag and Info Booth",
        "location": "Queercon Swag & Info",
        "summary": "Come get your swag!",
        "date": "SAT 11 AUG",
        "hours": "10:00 - 18:00, 20:00 - 00:00",
        "icon1": "",
        "description": "Badges, T-shirts, accessories, and all the other information you may need.  The Queercon Swag and Info booth is open to show off our awesome QC stuff, fill you in on all of the events, and get you hooked up with a Queercon Badge (which will be needed for our evening events).",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Diversity & Recruitment Expo",
        "location": "QC Equality Room",
        "summary": "Meet with partner companies that support diversity and equality.",
        "date": "SAT 11 AUG",
        "hours": "12:00 - 18:00",
        "icon1": "",
        "description": "Come meet with companies that are looking for great LGBTQ+ talent in our new Queercon Diversity Expo.  These organizations support our community and are awesome in all ways. Stop in and talk to them! You might just find some hidden QC surprises inside.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Transgender Meetup",
        "location": "QC Chill 1",
        "summary": "Join us for the third annual transgender meetup",
        "date": "SAT 11 AUG",
        "hours": "12:00 - 13:00",
        "icon1": "",
        "description": "Queercon is a large and diverse community, and we embrace you for being you. Join us for the third annual transgender meetup - a safe and accepting place for all.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Keynote: Diversity & Inclusion Strategy",
        "location": "QC Main",
        "summary": "Diversity and inclusion in the workplace",
        "date": "SAT 11 AUG",
        "hours": "13:00 - 14:00",
        "icon1": "",
        "description": "Speaker: Christina Lapone (Chief People Officer, Rapid 7) - Diversity and inclusion are hot topics in today's world, and yet few companies have nailed how to effectively build a truly inclusive workplace. In this interactive discussion, Luconi will share what Rapid7 is doing to tackle this head on, and share candid insights on the successes, challenges, and learnings she's gained along the way. She's on a mission to make the workplace an environment where every person feels like they have equal opportunity to thrive and excel, and she's tackling it one candid conversation at a time.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "LGBTQ Diversity Panel",
        "location": "QC Chill 2",
        "summary": "",
        "date": "SAT 11 AUG",
        "hours": "14:00 - 15:00",
        "icon1": "",
        "description": "",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Bears of Queercon Meetup",
        "location": "QC Chill 1",
        "summary": "RAWR!",
        "date": "SAT 11 AUG",
        "hours": "14:00 - 15:00",
        "icon1": "",
        "description": "Grab your bears and cubs, and come by the Queercon den to mix and mingle with the Bears of Queercon.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Social Media Safety",
        "location": "QC Main",
        "summary": "",
        "date": "SAT 11 AUG",
        "hours": "15:00 - 16:00",
        "icon1": "",
        "description": "Speaker: Jesse Hitch - How did we end up becoming the products offered by the social media companies we use “for free” on a daily basis? We will explain the avenues which companies, such as Facebook or Google, use to track and compile analytics about everything we do. We then look at the headlines around the manipulation of our recent U.S. election, involving data brokers like Cambridge Analytica, how companies are gathering the metrics they do, and what you can do to stop it. The goal of this talk is to train the everyday user to be more mindful of privacy, while engaging in communities online.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "QC Local Meetup",
        "location": "QC Chill 2",
        "summary": "Queercon goes local",
        "date": "SAT 11 AUG",
        "hours": "15:00 - 16:00",
        "icon1": "",
        "description": "Last year Queercon launched our QC Locals groups and since then our Locals have been meeting-up all around the country. Have you attended a local meetup, yet? Come meet up with all of the other QC Local groups.  Looking to start a QC Local chapter in your area? Come get all the info on how to grow Queercon into your area.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Mixer",
        "location": "QC Main",
        "summary": "Mix and Mingle",
        "date": "SAT 11 AUG",
        "hours": "16:00 - 18:00",
        "icon1": "",
        "description": "Time to rally at the Queercon Lounge and grab a drink with all your new friends.  Swing by and mingle with everyone, find your dinner date and get ready for the Rainbow Ball!",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Rainbow Ball",
        "location": "QC Main",
        "summary": "Have a ball at THE party of the year",
        "date": "SAT 11 AUG",
        "hours": "20:00 - 03:00",
        "icon1": "[18+][BADGE]",
        "description": "Who needs a black and white ball when we have a Rainbow Ball?! The Queercon Lounge turns into the biggest dance party, and keeps going all night long. Featuring DJ Andrew Gibbons, Brett Law, and Skittish & Bus!",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Karaoke",
        "location": "QC Equality Room",
        "summary": "Sing with me, sing for the years. Sing for the laughter, sing for the tears",
        "date": "SAT 11 AUG",
        "hours": "20:00 - 03:00",
        "icon1": "[BADGE]",
        "description": "Want to take a break from the Rainbow Ball? Stop into the Equality Village, where we have transformed the room into our own Queer-e-oke Party!",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "QC Brunch",
        "location": "QC Main",
        "summary": "Mimosas YAAAS!",
        "date": "SUN 12 AUG",
        "hours": "10:00 - 12:00",
        "icon1": "",
        "description": "It may be the final day, but the fun is not over just yet. Join the amazing Queercon Bartenders as they pour up Mimosas for Queercon Brunch.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Swag and Info Booth",
        "location": "Queercon Swag & Info",
        "summary": "Last call for swag! Get your QC stuff before it’s gone.",
        "date": "SUN 12 AUG",
        "hours": "10:00 - 17:00",
        "icon1": "",
        "description": "Last call for swag! Get your QC stuff before it’s gone.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon Lightning Talks",
        "location": "QC Equality Room",
        "summary": "Talks in under 15 minutes",
        "date": "SUN 12 AUG",
        "hours": "12:00 - 14:00",
        "icon1": "",
        "description": "Come watch (or give) a lightning talk. Speak on whatever interests you, from LGBT+ to OSCP. Slides are welcome, but not required for this open forum. Talks should be limited to no more than 15 minutes. First time speakers encouraged!",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Getting involved with Queercon",
        "location": "QC Chill 2",
        "summary": "Get involved... ?... PROFIT!",
        "date": "SUN 12 AUG",
        "hours": "QC Chill 2",
        "icon1": "",
        "description": "Do you want to get more involved with Queercon? Have some skills that could help us grow? Stop in and learn how to get involved after the show in Vegas ends.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Closing Ceremonies",
        "location": "QC Main",
        "summary": "That’s a wrap! What's planned for QC16?",
        "date": "SUN 12 AUG",
        "hours": "14:00 - 15:00",
        "icon1": "",
        "description": "That’s a wrap! As we close out Queercon 15, join us before the farewell mixer to find out all of the behind the scenes details that made Queercon so great this year, and find out what we have planned for Queercon 16.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Queercon 16 Pre Booking",
        "location": "QC Swag & Info",
        "summary": "Lock in your QC16",
        "date": "SUN 12 AUG",
        "hours": "15:00 - 17:00",
        "icon1": "",
        "description": "Did you have a great time? Planning on coming back for the Queercon 16? We have a lot of great things planned, so why not pre-book your room with Queercon for next year? Lock in discounted prices with a $100 deposit.",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "Farewell Queercon Mixer",
        "location": "QC Lounge",
        "summary": "One last drink as we say goodbye",
        "date": "SUN 12 AUG",
        "hours": "15:00 - 17:00",
        "icon1": "",
        "description": "Stay after the closing ceremonies and have one last drink with your new friends as we say goodbye to Queercon 15. Sponsored by Yubico",
        "map": "https://goo.gl/maps/6HBxjv7obZv",
        "reservation": "",
        "host": "Queercon"
      },
      {
        "title": "SaintCON 2018",
        "location": "Utah Valley Convention Center",
        "summary": "Join for a nonprofit conference in Salt Lake City, 17 years running.",
        "date": "15 - 19 OCT",
        "hours": "09:00 - 23:00",
        "icon1": "",
        "description": "SAINTCON is a nonprofit conference devoted to security training and awareness, and presented by the UtahSAINT Organization. SAINTCON was founded in 2001, originally designed to provide security training to Utah based public entities. Today the conference has grown into a large gathering of security professionals, students, and interested individuals. From security to community, we focus on working together to promote security in all areas of technology. Many of the attendees of SAINTCON include computer security professionals, IT professionals, security researchers, students, or anyone with a general interst in technology security related topics.",
        "map": "https://goo.gl/maps/ktY91xHjxPM2",
        "reservation": "https://www.facebook.com/events/397972780636546/",
        "host": "SLC"
      }
    ];

    //Nothing more for you bellow.. unless you want to do coding for me
   
    /* let localData = http.get('assets/js/events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
      console.log('QC LocalData');
    }) */

    
  }

  openEventDetailsPage(item) {
    this.nav.push(EventsDetailsPage, { item: item });
  }

}
