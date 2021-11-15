const {PlacementController} = require("../../api/controllers/placementController");

describe("Check Placement api functionality", () => {
    it("Check Sticky Placement", async () => {
        const response = await PlacementController.getSticky();
        expect(response.status).toBe("OK");
    });

    it("Check Inline Placement", async () => {
        const response = await PlacementController.getInline();

        expect(response.placements).toHaveLength(1);
        expect(response.placements).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id: 113507})
            ])
        );
    });
});