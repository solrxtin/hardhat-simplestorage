// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 favoriteNumber;

    struct Person {
        string name;
        uint256 favoriteNumber;
    }

    Person[] public people;

    mapping(string => uint256) nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        Person memory person = Person({
            name: _name,
            favoriteNumber: _favoriteNumber
        });
        people.push(person);
        // people.push(Person(_name, _favoriteNumber))

        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}

