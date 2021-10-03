const storm = {
    superPower : 'flying',
    Power : printSuperPower
    }
    function printSuperPower() {
    console.log("my superpower is " + this.superPower);
    }

    storm.Power();