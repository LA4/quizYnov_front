import {Injectable} from '@angular/core';

import {ResponseDto} from '../dtos/response.dto';
import {ResponseModel} from '../models/reponse.model';

@Injectable({providedIn: 'root'})
export class ResponseMapper {

    public fromDto(dto: ResponseDto): ResponseModel {
      return {response :dto.responseResult};

  }

}
