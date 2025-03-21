import { useState } from 'react';
import PropTypes from 'prop-types';
import { X, School } from 'lucide-react';

export default function FacultyForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        designation: '',
        mobile: '',
        address: '',
        email: '',
        employeeType: '',
        dob: '',
        gender: '',
        joiningDate: '',
        category: '',
        officialEmail: '',
        maritalStatus: '',
        nationality: '',
        status: '',
        socialMedia: {
            linkedin: '',
            twitter: '',
        },
        education: [],
        experience: [],
        awards: [],
        publications: [],
        conferences: [],
        phdDetails: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialMedia.')) {
            const socialKey = name.split('.')[1];
            setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, [socialKey]: value }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    FacultyForm.propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-[#FF8C42]/10 rounded-full">
                        <School className="w-8 h-8 text-[#FF8C42]" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#FF8C42]">New Faculty Registration</h2>
                        <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
                    </div>
                </div>

                <div className="mb-6 bg-gray-100 h-2 rounded-full">
                    <div
                        className="h-full bg-[#FF8C42] rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Department</label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        <option value="cs">Computer Science</option>
                                        <option value="ee">Electrical Engineering</option>
                                        <option value="me">Mechanical Engineering</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Designation</label>
                                    <select
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Designation</option>
                                        <option value="professor">Professor</option>
                                        <option value="associate">Associate Professor</option>
                                        <option value="assistant">Assistant Professor</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Employee Type</label>
                                    <select
                                        name="employeeType"
                                        value={formData.employeeType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="permanent">Permanent</option>
                                        <option value="contract">Contract</option>
                                        <option value="visiting">Visiting</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    rows="3"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Date of Joining</label>
                                    <input
                                        type="date"
                                        name="joiningDate"
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="general">General</option>
                                        <option value="obc">OBC</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="socialMedia.linkedin"
                                        value={formData.socialMedia.linkedin}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Twitter Profile</label>
                                    <input
                                        type="url"
                                        name="socialMedia.twitter"
                                        value={formData.socialMedia.twitter}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">PhD Details</label>
                                <textarea
                                    name="phdDetails"
                                    value={formData.phdDetails}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    rows="3"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Education Details</label>
                                <textarea
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    rows="3"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Work Experience</label>
                                <textarea
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                    rows="3"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between pt-4 border-t">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Previous
                            </button>
                        )}
                        <div className="ml-auto space-x-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(currentStep + 1)}
                                    className="px-6 py-2.5 bg-[#FF8C42] text-white rounded-lg hover:bg-[#FF8C42]/90 transition-colors"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-[#FF8C42] text-white rounded-lg hover:bg-[#FF8C42]/90 transition-colors"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}