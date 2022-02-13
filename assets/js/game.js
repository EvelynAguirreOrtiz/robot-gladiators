// Gme States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or lessS

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
//console.log(playerName, playerAttack, playerHealth);

//var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Arnold", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
 
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


//for(var i = 0; i < enemyNames.length; i++) {
//    console.log(enemyNames[i]);
//    console.log(i);
//    console.log(enemyNames[i] + " is at " + i + " index "
//    );
//}

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
        fight();
    }
    //Alert players that they are starting the game
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player pcks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player want to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"
        );
        
        // if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!"
        );
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney
        );
         break;
    }
}

        // remove enemy's health by subtracting the amount set in the playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!"
            );
        
            // award player for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. "
            ); 
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
        );

        // check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!"
            );
            break;
        } else {
            window.alert(playerName = " still has " + playerHealth + " health left."
            );
        }
    }
};


        // if player choses to skip
    

        // if no (false), ask question by running fight() again 
        else {
            window.alert("You need to pick a valid option. Try again!"
            );
        }
    }
};
 
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
}
