
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");


describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function() {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a favorite number of 0", async function() {
    const favoriteNumber = await simpleStorage.retrieve();
    assert.equal(favoriteNumber.toString(), "0");
  })
  it("Should update when we call store", async () => {
    const newValue = "55"
    const txResp = await simpleStorage.store(newValue)
    await txResp.wait(1);
    const favoriteNumber = await simpleStorage.retrieve();
    expect(favoriteNumber.toString()).to.equal(newValue)
  })
  it("Should add person to the people array", async function() {
      const expectedName = "celestine"
      const expectedFavoriteNum = "7"
      const txResp = await simpleStorage.addPerson(
          expectedName,
          expectedFavoriteNum
      )
      await txResp.wait(1)
      const { name, favoriteNumber } = await simpleStorage.people(0);
      // const respNum = await simpleStorage.nameToFavoriteNumber[name];
      // console.log(respNum)
      /**
       * This could be done this way
       */
      // const person = await simpleStorage.people(0);
      // const name = person.name
      // const favoriteNumber = person.favoriteNumber
      assert.equal(name, expectedName)
      assert.equal(favoriteNumber.toString(), expectedFavoriteNum)
      // assert.equal(respNum, favoriteNumber)
      
  })
});
