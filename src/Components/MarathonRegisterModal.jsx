import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function MarathonRegisterModal({ marathonData }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const registerdData = {
      name: user.displayName,
      email: user.email,
      marathonTitle: marathonData.marathonTitle,
      marathonStart: marathonData.marathonStart,
      userPhoneNumber: data.phoneNumber,
      additionalInfo: data.additionalInfo,
      registerdId: marathonData._id,
      registerdDate: new Date()
    };

    try {
      await axiosSecure.post('/api/registerd-marathon', registerdData);
      toast.success('Registered Successfully');
      reset();
      setIsOpen(false);
      navigate('/dashboard/myApplyList')
    } catch (error) {
      toast.error('Registration failed');
      console.log(error);
    }
  };

  return (
    <>
      {/* Open Button */}
      <button className="btn btn-primary mt-6 w-full md:w-1/2" onClick={() => setIsOpen(true)}>
        Register Now
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl space-y-4">
            <DialogTitle className="text-lg font-bold text-center">
              Register for {marathonData.marathonTitle}
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="label">Marathon Title</label>
                <input
                  type="text"
                  value={marathonData.marathonTitle}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Marathon Start</label>
                <input
                  type="text"
                  value={marathonData.marathonStart}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                    minLength: {
                      value: 11,
                      message: 'Must be 11 digits'
                    },
                    maxLength: {
                      value: 11,
                      message: 'Must be 11 digits'
                    }
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-error text-sm">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label className="label">Additional Info</label>
                <textarea
                  className={`textarea textarea-bordered w-full ${
                    errors.additionalInfo ? 'textarea-error' : ''
                  }`}
                  placeholder="Additional info"
                  {...register('additionalInfo', {
                    required: 'Additional info is required'
                  })}
                ></textarea>
                {errors.additionalInfo && (
                  <p className="text-error text-sm">{errors.additionalInfo.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <button
                  type="button"
                  className="btn btn-outline w-full sm:w-auto"
                  onClick={() => {
                    reset();
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-neutral w-full sm:w-auto">
                  Register
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
