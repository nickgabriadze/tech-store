export default function handleSliding(
    leftButtonStatus: string, rightButtonStatus: string, moverIndex: number, techArrayLength: number,
    pressed: string
    ){
    let newMoverIndex = 0;
    let newLeftButtonStatus = '';
    let newRightButtonStatus = '';

    if(pressed === 'right'){
        if(moverIndex < techArrayLength - 1){
            newMoverIndex = moverIndex + 1;
            newLeftButtonStatus = 'active';
        }

        if(moverIndex === techArrayLength - 1){
            newRightButtonStatus = 'disabled';
        }
    }

    if(pressed === 'left'){
        if(moverIndex > 0){
            newMoverIndex = moverIndex - 1;
            newRightButtonStatus = 'active';
        }

        if(moverIndex === 0){
            newLeftButtonStatus = 'disabled';
        }

        
    }
    
    return [newMoverIndex, newLeftButtonStatus, newRightButtonStatus];
  
}