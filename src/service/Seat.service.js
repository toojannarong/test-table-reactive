
class SeatService {

    getSeatGrid(grid = [[]]) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`[SeatService][getSeatGrid] `);
                // Empty Grid
                const numRows = 10;
                const numCols = 10;
                for (let i = 0; i < numRows; i++) {
                    grid[i] = [];
                }
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        grid[i][j] = {
                            meta: {},
                            data: {
                                code: `(${i}, ${j})`
                            },
                            selected: false
                        };
                    }
                }
                resolve(grid);
            }, 1000);

        })

    }
}

export default new SeatService();
