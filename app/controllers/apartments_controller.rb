class ApartmentsController < ApplicationController

    def index
        apartments = Apartment.all
        render json: apartments
    end
  
    def create
    end
  
    def update
    end
  
    def destroy
            apartment = Apartment.find(params[:id])
            apartment.destroy
            if apartment.valid?
                render json: apartment
            else render json: apartment.errors
        end
    end

  
end
