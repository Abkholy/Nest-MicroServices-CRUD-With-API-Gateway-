import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthorizationFormService } from './authorization-form.service';
import { AuthorizationForm } from './entities/authorization-form.entity';


@Controller()
export class AuthorizationFormController {

  /* CRUD End Points for AuthorizationForm Created By Override */


  constructor(private service: AuthorizationFormService) { }
  /* POST AuthorizationForm End Point */

  @MessagePattern('AuthorizationForm/add')
  async saveAuthorizationForm(req: AuthorizationForm): Promise<AuthorizationForm> {
    return this.service.save(req)
  }


  /* GET All AuthorizationForms End Point */

  @MessagePattern('AuthorizationForm/getAll')
  getAllAuthorizationForms(): Promise<AuthorizationForm[]> {
    return this.service.findAll();
  }


  /* GET One AuthorizationForm End Point */

  @MessagePattern('AuthorizationForm/getById')
  findOne(id: string): Promise<AuthorizationForm> {
    return this.service.findOne(id);
  }


  /* PUT  AuthorizationForm End Point */

  @MessagePattern('AuthorizationForm/update')
  updateAuthorizationForm(req: { id: string, body: AuthorizationForm }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  AuthorizationForm End Point */

  @MessagePattern('AuthorizationForm/delete')
  deleteAuthorizationForm(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of AuthorizationForm Controller Class 
   
   */
}