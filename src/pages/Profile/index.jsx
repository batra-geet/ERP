import { useState } from 'react'
import { Card, CardContent, Button, Typography, Avatar } from '@mui/material'
import { Save as SaveIcon } from '@mui/icons-material'
import { useAuth } from '@/hooks/useAuth'
import { useApi } from '@/hooks/useApi'
import { userService } from '@/services/userService'
import FormInput from '@/components/forms/FormInput'
import toast from 'react-hot-toast'

export const Profile = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
  })

  const { execute: updateProfileApi, loading } = useApi(userService.updateUser)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateProfileApi(user.id, formData)
      toast.success('Profile details updated successfully (Simulated)')
    } catch (err) {
      toast.error(err.message || 'Failed to update profile')
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white font-sans">
          User Profile
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Update your corporate identity and account details
        </p>
      </div>

      <Card className="shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800 mb-6">
            <Avatar
              src={user?.avatar}
              alt={user?.name}
              className="w-20 h-20 border-2 border-indigo-100 dark:border-slate-800"
            />
            <div className="text-center sm:text-left">
              <Typography variant="h6" className="font-bold text-slate-800 dark:text-slate-200">
                {user?.name}
              </Typography>
              <Typography variant="body2" className="text-slate-500 dark:text-slate-400">
                {user?.role} &bull; ID: {user?.id}
              </Typography>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <FormInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FormInput
                label="Corporate Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled
                helperText="Designation changes are controlled by admin staff"
              />
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
