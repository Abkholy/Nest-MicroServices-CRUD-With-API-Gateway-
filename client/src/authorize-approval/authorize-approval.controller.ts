import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthorizeApproval } from '../authorize-model.dto';
import { AuthorizeApprovalService } from './authorize-approval.service';


@ApiTags('AuthorizeApproval')
@Controller('AuthorizeApproval')
export class AuthorizeApprovalController {

  /* CRUD End Points for AuthorizeApproval Created By Override */


  constructor(private service: AuthorizeApprovalService) { }
  /* POST AuthorizeApproval End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveAuthorizeApproval(@Body() req: AuthorizeApproval): Promise<AuthorizeApproval> {
    return this.service.save(req)
  }


  /* GET All AuthorizeApprovals End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllAuthorizeApprovals(): Promise<AuthorizeApproval[]> {
    return this.service.findAll();
  }


  /* GET One AuthorizeApproval End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AuthorizeApproval> {
    return this.service.findOne(id);
  }


  /* PUT  AuthorizeApproval End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAuthorizeApproval(@Param('id') id: string, @Body() req: AuthorizeApproval): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  AuthorizeApproval End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAuthorizeApproval(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of AuthorizeApproval Controller Class 
   
   */
}