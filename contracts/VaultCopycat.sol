// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract VaultCopycat {
  uint256 storedNumber;

  function storeNum(uint256 _num) public {
    storedNumber = _num;
  }

}
