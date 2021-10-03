const storm = {
    superPower : ['flying' + ' and' + ' weather'],
    Power : printSuperPower
    }
    function printSuperPower() {
    console.log("my superpower is " + this.superPower);
    }

    storm.Power();