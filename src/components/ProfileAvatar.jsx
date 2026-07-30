import React, { useState } from 'react';
import { Camera, ZoomIn, Check } from 'lucide-react';
import { AMILA_BOWEN_PHOTO } from '../data/profileImage';

export const ProfileAvatar = ({
  customImage,
  onImageChange,
  size = 'lg'
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  // Default fallback image matching headshot
  const defaultImage = customImage || AMILA_BOWEN_PHOTO;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && onImageChange) {
          onImageChange(reader.result);
          setShowUploadModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (inputUrl.trim() && onImageChange) {
      onImageChange(inputUrl.trim());
      setShowUploadModal(false);
      setInputUrl('');
    }
  };

  const dimensionClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-40 h-40 md:w-48 md:h-48',
    xl: 'w-52 h-52 md:w-60 md:h-60'
  }[size];

  return (
    <div className="relative group inline-block">
      {/* Outer decorative ring */}
      <div className={`relative ${dimensionClasses} rounded-full p-1 bg-gradient-to-tr from-slate-200 via-indigo-100 to-slate-200 shadow-md transition-all duration-300 group-hover:shadow-lg`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative border-2 border-white shadow-inner flex items-center justify-center">
          <img
            src={defaultImage}
            alt="Amila Bowen - Technical Support Specialist"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay actions */}
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 backdrop-blur-[2px]">
            <button
              onClick={() => setIsZoomed(true)}
              title="Zoom profile photo"
              className="p-2 rounded-full bg-white/90 text-slate-800 hover:bg-white shadow transition-transform transform hover:scale-110"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              title="Update photo"
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow transition-transform transform hover:scale-110"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={defaultImage}
              alt="Amila Bowen"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-4 flex justify-between items-center bg-slate-50 border-t border-slate-100">
              <div>
                <h3 className="font-semibold text-slate-900">Amila Bowen</h3>
                <p className="text-xs text-slate-500">Technical Support Specialist</p>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium hover:bg-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload/Change Photo Modal */}
      {showUploadModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowUploadModal(false)}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg">Update Profile Photo</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Upload from Device</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                />
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-3 text-slate-400 text-xs uppercase">Or Image URL</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <form onSubmit={handleUrlSubmit} className="space-y-3">
                <input
                  type="url"
                  placeholder="Paste image web address (https://...)"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" /> Save Photo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
