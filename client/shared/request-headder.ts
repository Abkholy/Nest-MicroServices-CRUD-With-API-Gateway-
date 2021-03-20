import { applyDecorators } from "@nestjs/common";
import { ApiHeader } from "@nestjs/swagger";

export function RequestHeaders() {
    return applyDecorators(
        // ApiHeader({
        //     name: 'authorization',
        //     required: true,
        //     example: 'Bearer Token'
        // }),
        // ApiHeader({
        //     name: 'tenant',
        //     required: true,
        //     example: 1, allowEmptyValue: false,
        // })
    );
}