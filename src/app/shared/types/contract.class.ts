export class Contract {
    private id: number;
    private name: string; 
    private signed: boolean;
    private description?: string;
    private thumbnailUrl?: string;
    private instanceUrl?: string;

    constructor() {
        this.signed = false; 
    }
}