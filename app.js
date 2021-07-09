//Initialize and declare Array of Objects
var tweetArr = [
    {tweet:"Autonomous SpaceX droneship", 
    username:"Elon Musk", 
    created_at:"07-09-2021", 
    age:50
    },
    {tweet:"Gas lit by gas light", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:50
    },
    {tweet:"Maybe that movie gaslit us all", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:50
    },
    {tweet:"Listening to History of English podcast", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:50
    },
    {tweet:"Supersonic shock wave", 
    username:"Elon Musk", 
    created_at:"07-07-2021", 
    age:50
    },
    {tweet:"Congrats Tesla Team on over 200,000 car built & delivered in Q2, despite many challenges!!", 
    username:"Elon Musk", 
    created_at:"07-02-2021", 
    age:50
    },
    {tweet:"Thanks for all the happy birthday wishes!", 
    username:"Elon Musk", 
    created_at:"06-28-2021", 
    age:50
    },
    {tweet:"How many Bitcoin maxis does it take to screw in a lightbulb?", 
    username:"Elon Musk", 
    created_at:"06-24-2021", 
    age:50
    },
    {tweet:"0 to 60mph in under 2 secs. Quickest production car ever made of any kind. Has to be felt to be believed.", 
    username:"Elon Musk", 
    created_at:"06-06-2021", 
    age:50
    },
    {tweet:"If only they had spaceships, they’d still be around", 
    username:"Elon Musk", 
    created_at:"05-26-2021", 
    age:50
    },
    {tweet:"What does the future hodl?", 
    username:"Elon Musk", 
    created_at:"04-24-2021", 
    age:50
    }
]

var counter = 0;
var arrayLength = tweetArr.length;
//loops through each element in array and logs it to console.
for (counter = 0; counter < arrayLength; counter++){
    console.log(tweetArr[counter].tweet + "/" + tweetArr[counter].username + "/" + tweetArr[counter].created_at);
}
