import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'
import Stripe from 'stripe'


export const getCheckoutSession = async(req,res)=>{
    try{
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        const stripe = new Stripe('sk_test_51Okq7HSE0GqX4uEHTNoNSZMXjnb82BQqPm1No3n2Hajlu9NOwVfHO93GFb6Lp8PFAUz0TkIcTmT4oAjAOT3LQFdY0045qR41Kv')
        
        // Create Checkout Session with a product and line items:
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,

            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data: {
                        currency:'inr',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }
                    },
                    quantity:1
                }
            ]
        })
        const booking=new Booking({
            doctor:doctor._id,
            user:user._id,
            ticketPrice:doctor.ticketPrice,
            session:session.id
        })
        await booking.save()
        res.status(200).json({success:true,message:'Successfully paid', session})
    }catch(err){
        console.log(err)
        res.status(500).json({success:false,message:'Error creating checkout session', })
    }
}