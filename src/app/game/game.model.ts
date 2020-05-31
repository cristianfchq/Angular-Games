export class Game {

    title: string;
    link: string;
    votos: number;

    constructor(
        title: string,
        link: string,
        votos?: number
    ) {
        this.title = title;
        this.link = link;
        this.votos = votos || 0;
    }

    votoUp(): void {
        this.votos = this.votos + 1;
    }

    votoDown(): void {
        if (this.votos === 0) {
            this.votos = 0;
        } else {
            this.votos = this.votos - 1;
        }
    }

    domain(): string{
        try {
            const url = this.link.split('//')[1];
            return url.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}