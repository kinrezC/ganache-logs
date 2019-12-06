pragma solidity 0.5.11;

contract HelloSKALE {
    string greeting;
    uint256 number;
    
    constructor() public {
        greeting = "Hello World";
        number = 45;
    }

    function sayHello() public view returns (string memory) {
        return greeting;
    }
    
    function getValue() public view returns (uint256) {
        return number;
    }
    
    function setNumber(uint num) public {
        number = num;
    }
    
    function() external payable {}
    
    function makeWithdrawal() public {
        msg.sender.transfer(address(this).balance);
    }
    
    function getVals(uint a, uint b) public view returns (uint, uint) {
      return (a, b);
    }
    
}
