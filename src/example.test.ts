

describe("Test", () => {

    it("check", () => {


          
        console.log({expect:expect.not})

    expect(100).toBeWithinRange(90, 110);
    expect(101).not.toBeWithinRange(0, 100);
    expect({apples: 6, bananas: 3}).toEqual(expect.objectContaining({
        apples: expect.toBeWithinRange(1, 10),
        bananas: expect.not.toBeWithinRange(11, 20),
    }));


    } )

})