import { Selector } from 'testcafe';

fixture`Checkers Game Automation`
    .page`https://www.gamesforthebrain.com/game/checkers/`;
    

    test('Confirm the website is up', async t => {
        const titleAct = await Selector('title').innerText
        console.log(titleAct)
        await t.expect(titleAct).contains('Checkers')
    });


    test('Automate 5 moves with orange - Solution1', async t => {
            for (let i = 2; i <= 4; i += 2) {
                for (let k = 3; k < 7; k += 2) {
                // a) Include taking a blue piece   
                const orangePiece = Selector(`div#board > div:nth-child(6) > img:nth-child(${i})`);
                // Click an orange piece to start the move
                await t.click(orangePiece);
                // Click the destination cell 
                await t.wait(500);   
                const destinationCell = (Selector(`div#board > div:nth-child(5) > img:nth-child(${k})`));
                await t.click(destinationCell);
                }
            }       
    
            await t.wait(2000);  
            const orangePieceMM = Selector(`div#board > div:nth-child(7) > img:nth-child(3)`)
            await t.click(orangePieceMM);
            await t.wait(500);   
            const destinationCell4 = (Selector(`div#board > div:nth-child(5) > img:nth-child(5)`));
            await t.click(destinationCell4);
            await t.wait(2000);
                
            await t.wait(2000);  
            const orangePieceMM2 = Selector(`div#board > div:nth-child(5) > img:nth-child(5)`)
            await t.click(orangePieceMM2);
            await t.wait(500);   
            const destinationCell42 = (Selector(`div#board > div:nth-child(4) > img:nth-child(4)`));
            await t.click(destinationCell42);
            await t.wait(2000);
            
            await t.wait(2000);  
            const orangePieceMM3 = Selector(`div#board > div:nth-child(7) > img:nth-child(5)`)
            await t.click(orangePieceMM3);
            await t.wait(500);   
            const destinationCell43 = (Selector(`div#board > div:nth-child(5) > img:nth-child(3)`));
            await t.click(destinationCell43);
            await t.wait(2000);
        
        const restartBtn = Selector('a').withText('Restart...');    
        await t.click(restartBtn);
        const selectPiece = Selector('p').withText('Select an orange piece to move.');
        await t.expect(selectPiece.exists).ok()
    });