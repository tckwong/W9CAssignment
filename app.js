//Initialize and declare Array of Objects
var tweetArr = [
    {tweet:"Autonomous SpaceX droneship", 
    username:"Elon Musk", 
    created_at:"07-09-2021", 
    age:15
    },
    {tweet:"Gas lit by gas light", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:17
    },
    {tweet:"Maybe that movie gaslit us all", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:18
    },
    {tweet:"Listening to History of English podcast", 
    username:"Elon Musk", 
    created_at:"07-08-2021", 
    age:19
    },
    {tweet:"Supersonic shock wave", 
    username:"Elon Musk", 
    created_at:"07-07-2021", 
    age:66
    },
    {tweet:"Congrats Tesla Team on over 200,000 car built & delivered in Q2, despite many challenges!!", 
    username:"Elon Musk", 
    created_at:"07-02-2021", 
    age:16
    },
    {tweet:"Thanks for all the happy birthday wishes!", 
    username:"Elon Musk", 
    created_at:"06-28-2021", 
    age:50
    },
    {tweet:"How many Bitcoin maxis does it take to screw in a lightbulb?", 
    username:"Elon Musk", 
    created_at:"06-24-2021", 
    age:55
    },
    {tweet:"0 to 60mph in under 2 secs. Quickest production car ever made of any kind. Has to be felt to be believed.", 
    username:"Elon Musk", 
    created_at:"06-06-2021", 
    age:88
    },
    {tweet:"If only they had spaceships, they’d still be around", 
    username:"Elon Musk", 
    created_at:"05-26-2021", 
    age:10
    },
    {tweet:"What does the future hodl?", 
    username:"Elon Musk", 
    created_at:"04-24-2021", 
    age:5
    }
]

//function with object argument 'ageTweet' and returns true if age is 18 or older
function checkAge(ageTweet){
    if(ageTweet.age >= 18) {
        return true;
    }else if (ageTweet.age <= 18){
        return false;
    }else{
        console.log("Something is wrong");
        return undefined;
    }
}
//Using filter method to make new array, then delete all objects except for the tweet
var newArray = tweetArr.filter(checkAge);
for(var i=0; i < newArray.length; i++){
    delete newArray[i]["username"];
    delete newArray[i]["created_at"];
    delete newArray[i]["age"];
}


