export enum Tags {
 h1='h1',
 h2 = 'h2',
 h3 = 'h3',
 h4 = 'h4',
 p = 'p',
 strong = 'strong',
 b ='b',
 span = 'span',
}

export type PlayerType = {
    name:string,
    wins:number,
    loses:number,
    currentGameCards?:string[],
}

export type GameType = {
    players:{playerOne:PlayerType,playerTwo:PlayerType}
    gameReady:boolean,
};
