// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract NumberVault {
  uint256 storedNumber;

  event NumberStored(uint256);

  function storeNum(uint256 _num) public {
    storedNumber = _num;
    emit NumberStored(storedNumber);
  }

}
