import { Column } from "typeorm";

export class LocationAxis {
    @Column({ type: 'double',nullable: true })
    lat: number;
    @Column({ type: 'double',nullable: true })
    lng: number;
    @Column({ type: 'double',nullable: true })
    radius: number;
}