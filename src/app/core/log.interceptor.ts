import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export  class  LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.urlWithParams); 

        var start = new Date().getTime();
        return  next.handle(req).pipe(
            // tap est un observable qui indique: 
             
            // Je fais des actions sans modifier la réponse
            tap((response) => {
                   
                    // On s'assure qu'il s'agit bien d'une réponse http
                    if (response  instanceof  HttpResponse) {
                            // Ici sera le code exécuté à la réponse du serveur
                            
                            var elapsed = new Date().getTime() - start ;

                          console.log(elapsed);
                            // Dans le cas où tout s'est bien passé
                    } ;
            })
    );

    }

 

   
}
